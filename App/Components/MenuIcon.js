import React from "react";
import { Image } from "react-native";

export const MenuIcon = ({ navigation }) => {
  if (!navigation.state.isDrawerOpen) {
    return (
      <Image
        style={{ margin: 10 }}
        source={require("../Assets/menu-button.png")}
      />
    );
  } else {
    return (
      <Image
        style={{ margin: 10 }}
        source={require("../Assets/left-arrow.png")}
      />
    );
  }
};
