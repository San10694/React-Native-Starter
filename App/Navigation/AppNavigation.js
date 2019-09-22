import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import { TouchableOpacity } from "react-native";
import DrawerScreen from "../Components/DrawerScreen";
import { MenuIcon } from "../Components/MenuIcon";
import Routes from "./Routes";
import Colors from '../Colors';
import ProfileScreen from "../Containers/ProfileScreen";
import ACScreen from "../Containers/ACScreen";
import SupportScreen from "../Containers/SupportScreen";


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

const PrimaryNav = createStackNavigator(
  {
    /*important: key and screen name (i.e. DrawerNavigator) should be same
     w
hile using the drawer navigator inside stack navigator.*/
    DrawerNavigator: {
      screen: DrawerNavigator
    },

    ProfileScreen: {
      name: "ProfileScreen",
      description: "ProfileScreen",
      screen: ProfileScreen,
      navigationOptions: {
        // title: "Profile Screen" 
      }
    },

    SupportScreen: {
      name: "SupportScreen",
      description: "SupportScreen",
      screen: SupportScreen,
      navigationOptions: {
        // title: "Profile Screen" 
      }
    },
    ACScreen: {
      name: "ACScreen",
      description: "ACScreen",
      screen: ACScreen,
      navigationOptions: {
        // title: "Profile Screen" 
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // title: "Tech Home", // Title to appear in status bar
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            const { routeName } = navigation.state
            if (routeName === 'DrawerNavigator') {
              navigation.dispatch(DrawerActions.toggleDrawer())
            }
            else {
              navigation.goBack();
            }
          }}
        >
          <MenuIcon navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: Colors.lightGrey,
        elevation: navigation.state.routeName === 'DrawerNavigator' ? 0 : 1,
      },
      headerTintColor: Colors.primary,
      headerTitleStyle: {
        fontWeight: "400"
      }
    })
  }
);

export default PrimaryNav;
