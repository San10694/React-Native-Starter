import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import { TouchableOpacity, Image } from "react-native";
import Routes from "./Routes";
import DrawerScreen from "../Components/DrawerScreen";

const DrawerNavigator = createDrawerNavigator(Routes, {
  initialRouteName: "HomeScreen",
  contentComponent: DrawerScreen,
  drawerWidth: 300,
  drawerBackgroundColor: "#F5FCFF",
  contentOptions: {
    activeTintColor: "blue",
    activeBackgroundColor: "grey",
    inactiveBackgroundColor: "black",
    itemsContainerStyle: {
      backgroundColor: "grey"
    },
    iconContainerStyle: {
      opacity: 1
    },
    activeLabelStyle: {},
    inactiveLabelStyle: {}
  }
});

const MenuIcon = ({ navigation }) => {
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

const PrimaryNav = createStackNavigator(
  {
    /*important: key and screen name (i.e. DrawerNavigator) should be same
     while using the drawer navigator inside stack navigator.*/
    DrawerNavigator: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "React Native Starter", // Title to appear in status bar
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuIcon navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "400"
      }
    })
  }
);

export default PrimaryNav;
