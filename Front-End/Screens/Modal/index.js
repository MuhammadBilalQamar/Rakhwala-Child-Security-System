import React, { Component, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { InputTextField } from "../../Components/index";
import styles from "./styles";

const MyModal = (props) => {
    let [modalVisible, setModalVisible, email] = useState(false);


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Forgot Password ?</Text>
                        <InputTextField
                            style={styles.inputTitle}
                            title="Email"
                            placeholderText={"abc@gmail.com"}
                            onChangeText={text => { email = text }}

                        />
                        <View style={styles.buttonsContainer}>
                            <TouchableHighlight
                                style={{ ...styles.openButton }}
                                onPress={() => {
                                    // setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Send Code</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.openButton }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.showModalButton}
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <Text style={[styles.text, styles.link, { textAlign: "right", fontSize: 18 }]}>Forgot Password ?</Text>
            </TouchableHighlight>
        </View>
    );
};

export default MyModal;