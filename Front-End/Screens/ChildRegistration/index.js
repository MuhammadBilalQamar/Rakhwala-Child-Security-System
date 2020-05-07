import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Header, Right, Left, Title, Body, Button } from "native-base"
import { Images } from "@config";
import { InputTextField, RadioButton } from "../../Components/index";
import { BaseColor } from "@config";
import styles from "./styles";


export default class ChildRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            nickName: "",
            watchKey: "",
            gender: "Male"
        }
    }

    getGender(val) {
        this.setState({ gender: val })
    }
    registerChild() {
        // console.log(this.state)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* HEADER SESSION */}

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
                            <Title>Register Child</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <FontAwesome5 name='user' size={20} color={"white"} />
                            </Button>
                        </Right>
                    </Header>


                    {/* PROFILE IMAGE PICKER SESSION */}

                    <View style={{ alignSelf: "center", marginTop: 20 }}>
                        <TouchableOpacity>
                            <View style={styles.profileImage}>
                                <Image source={Images.childAvartar} style={styles.image} resizeMode="center"></Image>
                            </View>
                            <View style={styles.add}>
                                <Ionicons name="ios-add" size={50} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* FORM SESSION */}
                    <View style={{ marginHorizontal: 20 }}>
                        <InputTextField
                            style={styles.inputTitle}
                            title="Full Name"
                            placeholderText={"Muhammad Bilal..."}
                            onChangeText={text => { this.setState({ fullName: text }) }}
                        />
                        <InputTextField
                            style={{
                                marginTop: 32,
                                marginBottom: 8
                            }}
                            title="Nick Name"
                            placeholderText={"@sweety..."}
                            onChangeText={text => { this.setState({ nickName: text }) }}

                        />
                        <InputTextField
                            style={{
                                marginTop: 32,
                                marginBottom: 8
                            }}
                            title="Watch Key"
                            placeholderText={"123rakhwalateam890..."}
                            isSecure={true}
                            onChangeText={text => { this.setState({ watchKey: text }) }}

                        />

                        <View style={{ marginTop: 15 }}>
                            <RadioButton getGender={(val) => { this.getGender(val) }} />
                        </View>

                        <TouchableOpacity style={styles.submitContainer} onPress={() => { this.registerChild() }}>
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        color: "#FFF",
                                        fontWeight: "600",
                                        fontSize: 16
                                    }
                                ]}
                            >
                                Register
                        </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


