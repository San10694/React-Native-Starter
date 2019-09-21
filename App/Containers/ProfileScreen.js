import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from '../Colors';

export default class ProfileScreen extends Component {
  static navigationOptions = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to ProfileScreen!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGrey
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
