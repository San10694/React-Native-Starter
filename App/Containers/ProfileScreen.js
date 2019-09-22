import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView, Dimensions, View, Image } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import images from "../Images";
import Colors from '../Colors';
const { width, height } = Dimensions.get('window');

const catData = [
  { key: 1, title: 'AC', icon: images.ac },
  { key: 2, title: 'WiFi', icon: 'access-point-network' },
  { key: 3, title: 'Lights', icon: 'lightbulb-on-outline' },
  { key: 4, title: 'Air Purifier', icon: 'weather-partlycloudy' },
  { key: 4, title: 'Connect New', icon: 'cast-connected' },
  // { key: 4, title: 'Security', icon: 'security' },
]
export default class ProfileScreen extends Component {
  static navigationOptions = {};
  render() {
    return (
      <View style={styles.container}>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ACScreen")}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center', elevation: 1,
                    borderRadius: 2,
                    width: width * 0.28,
                    margin: 2,
                    paddingTop: 20,

                  }}>
                  <View >
                    {item.title == 'AC' ?
                      <View style={styles.imgContainer}>
                        <Image source={item.icon} style={styles.bookImg} resizeMode='stretch' />
                      </View>
                      : <Icon name={item.icon} size={40} color={Colors.primary} style={{ marginTop: 10 }}> </Icon>
                    }
                  </View>
                  <Text style={styles.welcome}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          }

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,

  },
  welcome: {
    fontSize: 12,
    fontFamily: "roboto.medium",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
    color: Colors.black
  },

  imgContainer: {
    // width: width * 0.45,
    // height: 100,
    // width: width * 0.95,
    // height: height * 0.30,
    position: 'relative',

  },
  bookImg: {
    width: 80,
    height: 40,
    top: 5,
    // left: 70,
    // position: 'absolute',
    borderRadius: 5,
  },
});
