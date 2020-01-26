import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  render() {
      return (
          <Container style={styles.safeArea}>
            <Header style={styles.Header}>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Text style={styles.TitleText}>Student Assistant</Text>
              </Body>
              <Right />
            </Header>
            <Content>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={styles.TextHome}>
                    Bienvenido usuario
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
            <Footer>
              <FooterTab>
                <Button icon>
                  <Icon name='home' />
                </Button>
                <Button icon>
                  <Icon name='clock' />
                </Button>
                <Button icon>
                  <Icon name='list-box' />
                </Button>
                <Button icon>
                  <Icon name='calendar' />
                </Button>
                <Button icon>
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
  },
  TitleText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white'
  },
  TextHome: {
    //ajustarlo y pasar este estilo a la padre para que este centrado el texto
    fontWeight: '900',
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    backgroundColor: 'white'
  }
});
