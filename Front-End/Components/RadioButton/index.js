import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BaseColor } from "@config";

export default class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioSelected: 1
        }
    }


    radioClick(val, id) {
        this.setState({
            radioSelected: id
        })
        this.props.getGender(val)
    }

    render() {

        const data = [{
            id: 1,
            value: "Male"
        },
        {
            id: 2,
            value: "Female"

        }
        ];

        return (

            <View style={{ ...this.props.styleContainer, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {data.map((val) => {
                    return (
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row" }} key={val.id} onPress={this.radioClick.bind(this, val.value, val.id)}>
                            <Text style={{ marginHorizontal: 10, fontSize: 18 }}>{val.value}</Text>
                            <View style={{
                                height: 24,
                                width: 24,
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: BaseColor.primaryColor,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {
                                    val.id == this.state.radioSelected ?
                                        <View style={{
                                            height: 12,
                                            width: 12,
                                            borderRadius: 6,
                                            backgroundColor: BaseColor.lightPrimaryColor,
                                        }} >
                                        </View>
                                        : null
                                }
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}