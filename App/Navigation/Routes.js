import HomeScreen from "../Containers/HomeScreen";
import ProfileScreen from "../Containers/ProfileScreen";

export default {
  HomeScreen: {
    name: "HomeScreen",
    description: "HomeScreen",
    screen: HomeScreen,
    navigationOptions: {
      title: "HomeScreen"
    }
  },
  ProfileScreen: {
    name: "ProfileScreen",
    description: "ProfileScreen",
    screen: ProfileScreen,
    navigationOptions: {
      title: "ProfileScreen"
    }
  }
};
