import React, { Component } from 'react';
import { Text} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Student Assistant</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>
              Aqui se insertará el menú
            </Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button iconLeft>
                <Icon name='home' />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
  }
}
