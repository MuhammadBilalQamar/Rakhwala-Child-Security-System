import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { InputTextField } from "../../Components/index";
import styles from "./styles";
import { Images } from "@config";
import MyModal from "../Modal/index"
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isShowModal: false
        }
    }

    login() {
        // console.log(this.state)
        this.props.navigation.navigate("Home")
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
                        <Image source={Images.logo} />
                        <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>Rakhwala</Text>
                    </View>
                    <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity>
                            <View style={styles.socialButton}>
                                <Image source={Images.fbLogo} style={styles.socialLogo} />
                                <Text style={styles.text}>Facebook</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={Images.googleLogo} style={styles.socialLogo} />
                            <Text style={styles.text}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>----------- OR -----------</Text>

                    <InputTextField
                        style={styles.inputTitle}
                        title="Email"
                        placeholderText={"abc@gmail.com"}
                        onChangeText={text => { this.setState({ email: text }) }}

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

                    <TouchableOpacity style={styles.submitContainer}
                        onPress={() => { this.login() }}
                    >
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
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/* <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text> */}
                        <View style={[styles.text, styles.link, { textAlign: "right" }]}>
                            <MyModal />
                        </View>

                    </TouchableOpacity>

                    <Text
                        style={[
                            styles.text,
                            {
                                fontSize: 14,
                                color: "#ABB4BD",
                                textAlign: "center",
                                marginTop: 24
                            }
                        ]}
                    >
                        Don't have an account?
                    </Text>
                    <TouchableOpacity style={{ alignItems: "center" }}
                        onPress={() => { this.props.navigation.navigate("SignUp") }}
                    >
                        <Text style={[styles.text, styles.link]}>Register Now</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }
}
