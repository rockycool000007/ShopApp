import React from 'react';
import { Container, Header, Left, Body, Right, Title, Center } from 'native-base';
export default class HeaderComponent extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Title</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}