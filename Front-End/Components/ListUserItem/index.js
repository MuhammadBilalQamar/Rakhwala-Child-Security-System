import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ListUserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.listItemClicked}>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={this.props.imageUri} />
                    </Left>
                    <Body>
                        <Text style={{ marginVertical: 5, fontSize: 17 }}>{this.props.userName}</Text>
                        <Text note numberOfLines={1}>{this.props.subNote}</Text>
                    </Body>
                    <Right>
                        {this.props.isRightItemShow ? <TouchableOpacity onPress={this.props.inviteBtnClicked}>

                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </TouchableOpacity> : null}
                    </Right>
                </ListItem>
            </TouchableOpacity>
        );
    }
}