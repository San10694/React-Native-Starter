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
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text
                style={styles.textItem}
                onPress={this.navigateToScreen("AboutScreen")}
              >
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text
                style={styles.textItem}
                onPress={this.navigateToScreen("ContactScreen")}
              >
                Contact
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
    alignItems: "center"
    //backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "#d6d7da",
    width: 300
  },
  textItem: {
    fontSize: 16,
    fontWeight: "400"
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
