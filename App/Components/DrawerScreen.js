import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { DrawerActions } from "react-navigation";
import Colors from "../Colors";

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.menuItem}>
              <Text
                style={styles.textItem}
                onPress={this.navigateToScreen("HomeScreen")}
              >
                HOME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text
                style={styles.textItem}
                onPress={this.navigateToScreen("AboutScreen")}
              >
                ABOUT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text
                style={styles.textItem}
                onPress={this.navigateToScreen("ContactScreen")}
              >
                CONTACT
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGrey
    //backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  menuItem: {
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderColor: "#d6d7da",
    width: 300,
  },


  textItem: {
    fontSize: 15,
    fontWeight: "400",
    color: Colors.black,
    fontFamily: "roboto.medium",
  }

});

// use native component for drawer
// import { DrawerItems, SafeAreaView } from "react-navigation";

// const CustomDrawerContentComponent = props => (
//   <ScrollView>
//     <SafeAreaView
//       style={styles.container}
//       forceInset={{ top: "always", horizontal: "never" }}
//     >
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
