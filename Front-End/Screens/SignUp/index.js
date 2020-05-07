import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Images } from "@config";
import { InputTextField, RadioButton } from "../../Components/index";
import { BaseColor } from "@config";
import styles from "./styles";


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "Male"
        }
    }

    registerUser() {
        // console.log(this.state)
    }
    getGender(val) {
        this.setState({ gender: val })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* HEADER SESSION */}
                    <View style={styles.titleBar}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Login")
                        }}>
                            <Ionicons name="ios-arrow-back" size={24} color={BaseColor.textPrimaryColor}></Ionicons>
                        </TouchableOpacity>
                    </View>

                    {/* PROFILE IMAGE PICKER SESSION */}

                    <View style={{ alignSelf: "center" }}>
                        <TouchableOpacity>
                            <View style={styles.profileImage}>
                                <Image source={Images.avartar} style={styles.image} resizeMode="center"></Image>
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
                            title="Email"
                            placeholderText={"abc@gmail.com..."}
                            onChangeText={text => { this.setState({ email: text }) }}

                        />
                        <InputTextField
                            style={{
                                marginTop: 32,
                                marginBottom: 8
                            }}
                            title="Phone"
                            isSecure={true}
                            placeholderText={"your phone number here.."}
                            onChangeText={text => { this.setState({ phoneNum: text }) }}

                        />
                        <InputTextField
                            style={{
                                marginTop: 32,
                                marginBottom: 8
                            }}
                            title="Password"
                            isSecure={true}
                            placeholderText={"your password here.."}
                            onChangeText={text => { this.setState({ password: text }) }}

                        />

                        <InputTextField
                            style={{
                                marginTop: 32,
                                marginBottom: 8
                            }}
                            title="Confirm Password"
                            isSecure={true}
                            placeholderText={"your password again.."}
                            onChangeText={text => { this.setState({ confirmPassword: text }) }}

                        />

                        <View style={{ marginTop: 15 }}>
                            <RadioButton getGender={(val) => { this.getGender(val) }} />
                        </View>

                        <TouchableOpacity style={styles.submitContainer} onPress={() => { this.registerUser() }}>
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


