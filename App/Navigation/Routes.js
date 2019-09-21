import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";
import AboutScreen from "../Containers/AboutScreen";
import ContactScreen from "../Containers/ContactScreen";

export default {
  HomeScreen: {
    name: "HomeScreen",
    description: "HomeScreen",
    screen: HomeScreen,
    navigationOptions: {
      title: "Home Screen"
    }
  },

  AboutScreen: {
    name: "AboutScreen",
    description: "AboutScreen",
    screen: AboutScreen,
    navigationOptions: {
      title: "About Screen"
    }
  },
  ContactScreen: {
    name: "ContactScreen",
    description: "ContactScreen",
    screen: ContactScreen,
    navigationOptions: {
      title: "Contact Screen"
    }
  }
};
