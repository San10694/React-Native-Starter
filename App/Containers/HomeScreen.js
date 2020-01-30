import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { getRestaurantList } from "../Redux/ListRedux";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getRestaurantList();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { restaurantList } = state;
  console.log("State in Home Screen- ", restaurantList);
  return {
    restaurantList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurantList: () => dispatch(getRestaurantList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
