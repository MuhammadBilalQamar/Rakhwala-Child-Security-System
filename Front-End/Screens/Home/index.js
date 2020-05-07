import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Container, Card, CardItem, Thumbnail, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { BaseColor, Images } from "@config";
import styles from "./styles";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    trackChildClick = () => {
        this.props.navigation.navigate("ViewAllChilds")


    }
    addChildClick = () => {
        this.props.navigation.navigate("ChildRegistration")

    }
    settingsClick = () => {


    }
    profileClick = () => {

        this.props.navigation.navigate("Profile")
    }
    groupsClick = () => {
        this.props.navigation.navigate("MyGroups")

    }
    aboutUsClick = () => {
        this.props.navigation.navigate("AboutUs")

    }

    signOut = () => {
        this.props.navigation.navigate("Login")
    }


    render() {
        return (
            <Container>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header style={{
                        backgroundColor: BaseColor.primaryColor,
                        height: 70
                    }}>
                        <Left>
                            <Button transparent>
                                <FontAwesome5 name='list' size={24} color={"white"} />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Home</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => { this.signOut() }}>
                                <FontAwesome5 name='user' size={20} color={"white"} />
                            </Button>
                        </Right>
                    </Header>

                    {/* MAIN CONTENT */}
                    <View>

                        <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => { this.trackChildClick() }}>
                                <View style={styles.socialButton}>
                                    <Image source={Images.availableChileTrack} style={styles.socialLogo} />
                                    <Text style={styles.text}>Track Child</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.addChildClick() }} style={styles.socialButton}>
                                <Image source={Images.addChildTracker} style={styles.socialLogo} />
                                <Text style={styles.text}>Add Child</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => { this.settingsClick() }}>
                                <View style={styles.socialButton}>
                                    <Image source={Images.settings} style={styles.socialLogo} />
                                    <Text style={styles.text}>Settings</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.profileClick() }} style={styles.socialButton}>
                                <Image source={Images.profile} style={styles.socialLogo} />
                                <Text style={styles.text}>Profile</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => { this.groupsClick() }}>
                                <View style={styles.socialButton}>
                                    <Image source={Images.group} style={styles.socialLogo} />
                                    <Text style={styles.text}>My Groups</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.aboutUsClick() }} style={styles.socialButton}>
                                <Image source={Images.aboutUs} style={styles.socialLogo} />
                                <Text style={styles.text}>About Us</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </SafeAreaView>

            </Container>
        );
    }
}
