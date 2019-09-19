import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../Colors";


export const MenuIcon = ({ navigation }) => {
  if (!navigation.state.isDrawerOpen) {
    return (
      <View style={{ margin: 10 }}>
        <Icon name="menu" size={25} color={Colors.primary}>
        </Icon>
      </View>
    );
  } else {
    return (
      <View style={{ margin: 10 }}>
        <Icon name="arrow-left" size={25} color={Colors.primary}>
        </Icon>
      </View>
    );
  }
};
