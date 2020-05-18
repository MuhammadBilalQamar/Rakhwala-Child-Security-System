import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Header, Title, Button } from 'native-base';
import { BaseColor, Images } from "@config";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

export default class MyGroups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 3,
                    image: "https://lorempixel.com/100/100/nature/1/",
                    name: "Group 1",
                    countMembers: 51,
                    members: [
                        "https://bootdey.com/img/Content/avatar/avatar6.png",
                        "https://bootdey.com/img/Content/avatar/avatar1.png",
                        "https://bootdey.com/img/Content/avatar/avatar2.png",
                        "https://bootdey.com/img/Content/avatar/avatar7.png",
                        "https://bootdey.com/img/Content/avatar/avatar3.png",
                        "https://bootdey.com/img/Content/avatar/avatar4.png"
                    ]
                },
                {
                    id: 2,
                    image: "https://lorempixel.com/100/100/nature/2/",
                    name: "Group 2",
                    countMembers: 10,
                    members: [
                        "https://bootdey.com/img/Content/avatar/avatar6.png",
                        "https://bootdey.com/img/Content/avatar/avatar1.png",
                    ]
                },
                {
                    id: 4,
                    image: "https://lorempixel.com/100/100/nature/3/",
                    name: "Group 3",
                    countMembers: 58,
                    members: [
                        "https://bootdey.com/img/Content/avatar/avatar6.png",
                        "https://bootdey.com/img/Content/avatar/avatar1.png",
                        "https://bootdey.com/img/Content/avatar/avatar2.png"
                    ]
                },

            ]
        }
    }

    renderGroupMembers = (group) => {
        if (group.members) {
            return (
                <View style={styles.groupMembersContent}>
                    {group.members.map((prop, key) => {
                        return (
                            <Image key={key} style={styles.memberImage} source={{ uri: prop }} />
                        );
                    })}
                </View>
            );
        }
        return null;
    }

    render() {
        return (
            <Container >
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
                        <Title>My Groups</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <FontAwesome5 name='user' size={20} color={"white"} />
                        </Button>
                    </Right>
                </Header>

                <FlatList
                    style={styles.root}
                    data={this.state.data}
                    extraData={this.state}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator} />
                        )
                    }}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={(item) => {
                        const Group = item.item;
                        let mainContentStyle;
                        if (Group.attachment) {
                            mainContentStyle = styles.mainContent;
                        }
                        return (
                            <TouchableOpacity>
                                <View style={styles.container}>
                                    <Image source={{ uri: Group.image }} style={styles.avatar} />
                                    <View style={styles.content}>
                                        <View style={mainContentStyle}>
                                            <View style={styles.text}>
                                                <Text style={styles.groupName}>{Group.name}</Text>
                                            </View>
                                            <Text style={styles.countMembers}>
                                                {Group.countMembers} members
                                       </Text>
                                            <Text style={styles.timeAgo}>
                                                Updated 2 months ago
                                        </Text>
                                            {this.renderGroupMembers(Group)}
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }} />

            </Container>
        );
    }
}
