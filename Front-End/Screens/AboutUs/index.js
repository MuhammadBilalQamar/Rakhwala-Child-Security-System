import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { BaseColor, Images } from "@config";
import {  Ionicons,FontAwesome5 } from "@expo/vector-icons";
import { Header, Right, Left, Title, Body ,   Button} from "native-base";

export default class AboutUs extends Component {

    constructor(props) {
        super(props);
    }

    clickEventListener() {

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
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
                            <Title>About Us</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <FontAwesome5 name='user' size={20} color={"white"} />
                            </Button>
                        </Right>
                </Header>


                    <View style={{ alignItems: 'center', marginHorizontal: 30, marginTop: 40 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>

                        <Image style={styles.mainLogo} source={Images.logo} />
                    </View>
                        <Text style={styles.name}>RakhWala Team</Text>
                        <Text style={styles.subNote}>high scale business application developers</Text>
                        <Text style={styles.description}>
                        The main purpose of our app is to serve tensed parents and family 
                        members whenever their child/loved ones are out of home and they are 
                        very worried about them. This platform reduces their tension by providing 
                        them current location, and health updates like temperature and heart rate for child and for family members 
                        within a single group or individual. All of these qualities are available within a range of 
                        single touch (app).
                      </Text>
                    </View>
                    <View style={styles.starContainer}>
                        <Image style={styles.star} source={Images.star} />
                        <Image style={styles.star} source={Images.star} />
                        <Image style={styles.star} source={Images.star} />
                        <Image style={styles.star} source={Images.star} />
                        <Image style={styles.star} source={Images.star} />
                    </View>
                    <View style={styles.contentColors}>
                        <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00BFFF" }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF1493" }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00CED1" }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#228B22" }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#20B2AA" }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF4500" }]}></TouchableOpacity>
                    </View>
                    <View style={styles.contentSize}>
                        <TouchableOpacity style={styles.logoContainer}><Image style={styles.logo} source={Images.fbLogo} /></TouchableOpacity>
                        <TouchableOpacity style={styles.logoContainer}><Image style={styles.logo} source={Images.googleLogo} /></TouchableOpacity>
                        <TouchableOpacity style={styles.logoContainer}><Image style={styles.logo} source={Images.gitHubLogo} /></TouchableOpacity>
                        <TouchableOpacity style={styles.logoContainer}><Image style={styles.logo} source={Images.linkedInLogo} /></TouchableOpacity>
                    </View>
                    <View style={styles.separator}></View>
                    {/* <View style={styles.addToCarContainer}>
                        <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                            <Text style={styles.shareButtonText}>Share</Text>
                        </TouchableOpacity>
                    </View> */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logo: {
        width: 20,
        height: 20,
    },
    logoContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: BaseColor.borderColor,
        borderRadius: 9,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    mainLogo: {
        // width: 150,
        // height: 150,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    subNote: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        color: "#696969",
    },
    star: {
        width: 40,
        height: 40,
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnSize: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 6,
        backgroundColor: 'white',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentColors: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    separator: {
        height: 2,
        backgroundColor: "#eeeeee",
        marginTop: 20,
        marginHorizontal: 30
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30
    }
}); 