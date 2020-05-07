import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Header, Title, Button, Text } from 'native-base';
import { Platform, StyleSheet, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { BaseColor, Images } from "@config";
import { ListUserItem } from "../../Components/index";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container >
                <View style={styles.headerContainer}>
                    <ImageBackground
                        style={styles.headerBackgroundImage}
                        blurRadius={10}
                        source={Images.profileBg}
                    >
                        <View style={styles.headerColumn}>
                            <View style={{ position: "absolute", left: 0, top: 0, marginLeft: 13 }}>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("Home")
                                }}>
                                    <Ionicons name="ios-arrow-back" size={24} color={"white"}></Ionicons>
                                </TouchableOpacity>
                            </View>

                            <Image
                                style={styles.userImage}
                                source={Images.avartar}
                            />
                            <Text style={styles.userNameText}>{"Muhammad Bilal"}</Text>
                            <View style={styles.userAddressRow}>
                                <View>
                                    <EvilIcons
                                        size={24}
                                        color={"white"}
                                        name="location"

                                    />
                                </View>
                                <View style={styles.userCityRow}>
                                    <Text style={styles.userCityText}>
                                        {"Karachi"}, {"Pakistan"}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ScrollView>
                        <ListUserItem
                            // key={i}
                            imageUri={Images.email}
                            userName={"bilal@gmail.com"}
                            subNote={"Personal"}
                        // isRightItemShow={true}
                        // listItemClicked={() => { this.navigateToParticularUser(i) }}
                        />
                        <ListUserItem
                            // key={i}
                            imageUri={Images.phone}
                            userName={"03131036141"}
                            subNote={"Mobile"}
                        // isRightItemShow={true}
                        // listItemClicked={() => { this.navigateToParticularUser(i) }}
                        />
                    </ScrollView>
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },

    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: BaseColor.lightPrimaryColor,
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        fontFamily: "Roboto",
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
})