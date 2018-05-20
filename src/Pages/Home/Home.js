import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../../Components/Header/Header";

export default class Home extends React.Component {
  render() {
    return (
      <View >
        <Header title="Home" />
      </View>
    );
  }
}