import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  render() {
      return (
          <Container style={styles.safeArea}>
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
                <Button iconLeft>
                  <Icon name='clock' />
                </Button>
                <Button iconLeft>
                  <Icon name='list-box' />
                </Button>
                <Button iconLeft>
                  <Icon name='calendar' />
                </Button>
                <Button iconLeft>
                  <Icon name='more' />
                </Button>
              </FooterTab>
            </Footer>
          </Container>
      );
  }
}

const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
      backgroundColor: '#ddd'
  }
});
