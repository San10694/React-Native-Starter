import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView, Dimensions, View, Image } from "react-native";
import { connect } from "react-redux";

import { getRestaurantList } from "../Redux/ListRedux";
import images from "../Images";
import Colors from '../Colors';
const { width, height } = Dimensions.get('window');


const bannerData = [
  { key: 1, title: 'Harry Poter part -1', price: 50, image: images.banner1 },
  { key: 2, title: 'Harry Poter part -2', price: 50, image: images.banner1 },
  { key: 3, title: 'Harry Poter part -3', price: 50, image: images.banner1 },
  { key: 4, title: 'Harry Poter part -4', price: 50, image: images.banner1 }
]

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRestaurantList();
  }


  render() {
    return (
      <View style={styles.container}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            bannerData.map((item, index) => {
              return (
                <View style={[styles.cardSectionContainer]} >
                  <View style={styles.imgContainer}>
                    <Image source={item.image} style={styles.bookImg} resizeMode='stretch' />
                  </View>

                </View>)
            })
          }
        </ScrollView>
        {/* <Text style={styles.welcome}>Welcome to Home!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#b5b9bf",
            height: 35,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }}
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        >
          <Text>Navigate to Profile</Text>
        </TouchableOpacity> */}
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
  },
  cardSectionContainer: {
    backgroundColor: Colors.background,
    margin: 10,
    padding: 5,
    borderRadius: 8,
    width: width * 0.95,
    height: height * 0.30,
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowColor: Colors.lightGrey,
  },
  imgContainer: {
    // width: width * 0.45,
    // height: 100,
    // width: width * 0.95,
    // height: height * 0.30,
    position: 'relative',

  },
  bookImg: {
    width: width * 0.93,
    height: height * 0.285,
    // top: 25,
    // left: 70,
    //position: 'absolute',
    borderRadius: 5,
  },
});
