import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView, Dimensions, View, Image } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getRestaurantList } from "../Redux/ListRedux";
import images from "../Images";
import Colors from '../Colors';
const { width, height } = Dimensions.get('window');


const bannerData = [
  { key: 1, title: 'Harry Poter part -1', image: images.banner2 },
  { key: 2, title: 'Harry Poter part -2', price: 50, image: images.banner1 },
  { key: 3, title: 'Harry Poter part -3', price: 50, image: images.banner2 },
  { key: 4, title: 'Harry Poter part -4', price: 50, image: images.banner1 }
]

const catData = [
  { key: 1, title: 'Mera Aashiyaana', icon: 'home-city-outline', screen: 'ProfileScreen' },
  { key: 2, title: 'Support', icon: 'help-box', screen: 'SupportScreen' },
  { key: 3, title: 'Smart Key', icon: 'cellphone-key', screen: 'ProfileScreen' },
  { key: 4, title: 'Climate', icon: 'weather-partlycloudy', screen: 'ProfileScreen' },
  { key: 4, title: 'Services', icon: 'headset', screen: 'ProfileScreen' },
  { key: 4, title: 'Security', icon: 'security', screen: 'ProfileScreen' },
]

class HomeScreen extends Component {

  static navigationOptions = {

  }


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getRestaurantList();
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={{}} containerStyle={{}}>
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

          <View style={{
            marginTop: 20,
            paddingHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
            {
              catData.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate(item.screen)
                  }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center', elevation: 2,
                      borderRadius: 5, width: width * 0.28,
                      margin: 5,
                    }}>
                    <View >
                      <Icon name={item.icon} size={40} color={Colors.primary} style={{ marginTop: 10 }}> </Icon>
                    </View>
                    <Text style={styles.welcome}>{item.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { restaurantList } = state;
  // console.log("State in Home Screen- ", restaurantList);
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
    backgroundColor: Colors.lightGrey,

  },
  welcome: {
    fontSize: 12,
    fontFamily: "roboto.medium",
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 5,
    color: Colors.black
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
