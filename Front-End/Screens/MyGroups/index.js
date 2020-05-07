import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Header, Title, Button, Text } from 'native-base';
import { BaseColor, Images } from "@config";
import { ListUserItem } from "../../Components/index";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";


export default class MyGroups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersDetail: [{
                name: "Bilal Qamar",
                status: "don't judge a book by its cover",
                img: Images.childAvartar,
                date: "12/11/2020"
            },
            {
                name: "Muhammad Umer",
                status: "A creative man is motivated by desire to achieve.",
                img: Images.avartar,
                date: "10/09/2020"
            }
            ]
        };
    }

    componentDidMount() {

    }
    navigateToParticularUser = (index) => {
        console.log("Selected Child Index#########", index)
        const { usersDetail } = this.state;
        var userData = usersDetail[index];


    }
    render() {
        const { usersDetail } = this.state;
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


                {/* CHILDS RENDERING */}
                <List>
                    {usersDetail.map((item, i) => {
                        return (
                            <ListUserItem
                                key={i}
                                imageUri={item.img}
                                userName={item.name}
                                subNote={`Added On ${item.date}`}
                                listItemClicked={() => { this.navigateToParticularUser(i) }}
                            />
                        )
                    })}
                </List>
            </Container>
        );
    }
}