import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StatusBar, Platform } from 'react-native';

// if (Platform.OS === 'android') StatusBar.setHidden(true);

export default class Head extends Component {

    render() {
        return (
            <Container>
                <Header style={{ marginTop: 24, backgroundColor: "blue" }}>
                    <Left>
                        <Button transparent onPress={() => this.props.leftBtnPress}>
                            <Icon name={this.props.leftIconName} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.rightBtnPress}>
                            <Icon name={this.props.rightIconName} />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}
