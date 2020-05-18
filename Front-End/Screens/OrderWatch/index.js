import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView
} from 'react-native';
import { BaseColor, Images } from "@config";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Header, Right, Left, Title, Body, Button } from "native-base";

export default class OrderWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            product: {
                name: "Available Watches",
                description: "This watch can track real time location with temperature and pulse rate and send all things in application. Your are just goto the track child option and check updated status about child in terms of location, temperature and pulse rate ",
                created: "",
                images: [
                    Images.watche1,
                    Images.watche2,
                    Images.watche3,
                ],
                colors: [
                    "#00BFFF",
                    "#FF1493",
                    "#00CED1",
                    "#228B22",
                    "#20B2AA",
                    "#FF4500",
                ]
            }
        };
    }
    clickEventListener() {
        alert("Watch Added Successfully");
    }

    __setImageSelected = (image) => {
        this.setState({ selectedImage: image });
    }

    __renderImages = () => {
        return (
            <View style={styles.smallImagesContainer}>
                {this.state.product.images.map((prop, key) => {
                    return (
                        <TouchableOpacity key={key} onPress={() => { this.__setImageSelected(prop) }}>
                            <Image style={styles.smallImage} source={prop} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    }

    __renderColors = () => {
        return (
            <View style={styles.contentColors}>
                {this.state.product.colors.map((prop, key) => {
                    return (
                        <TouchableOpacity key={key} style={[styles.btnColor, { backgroundColor: prop }]}></TouchableOpacity>
                    );
                })}
            </View>
        )
    }

    render() {
        var mainImage = (this.state.selectedImage) ? this.state.selectedImage : this.state.product.images[0];
        return (
            <View style={{}}>
                <Header style={{
                    backgroundColor: BaseColor.primaryColor,
                    height: 70
                }}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.navigate("Home") }}>
                            <Ionicons name='ios-arrow-back' size={24} color={"white"} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Order Watch</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <FontAwesome5 name='user' size={20} color={"white"} />
                        </Button>
                    </Right>
                </Header>

                <ScrollView style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.name}>{this.state.product.name}</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.header}>
                                <View style={styles.mainImageContainer}>
                                    <Image style={styles.mainImage} source={mainImage} />
                                </View>
                                {this.__renderImages()}
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Available Colors</Text>
                        </View>
                        <View style={styles.cardContent}>
                            {this.__renderColors()}
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Description </Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.description}>{this.state.product.description}</Text>
                        </View>
                    </View>

                    {/* <View style={styles.card}>
            <View style={styles.cardContent}> */}
                    <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                        <Text style={styles.shareButtonText}>Add To Cart</Text>
                    </TouchableOpacity>
                    {/* </View>
          </View> */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "white",
    },
    content: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    mainImage: {
        width: 200,
        height: 200,
    },
    smallImagesContainer: {
        flexDirection: 'column',
        marginLeft: 30
    },
    smallImage: {
        width: 60,
        height: 60,
        marginTop: 5,
    },
    btnColor: {
        height: 40,
        width: 40,
        borderRadius: 40,
        marginHorizontal: 3
    },
    contentColors: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 22,
        color: BaseColor.grayColor,
        fontWeight: 'bold',
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
        color: "#696969",
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: BaseColor.primaryColor,
        marginHorizontal:10
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },

    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        marginHorizontal: 5,
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 6,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardTitle: {
        color: BaseColor.primaryColor
    }
});  