import { StackNavigator } from "react-navigation";
import Routes from "./Routes";
//import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  Routes,

  {
    // Default config for all screens

    initialRouteName: "HomeScreen",

    navigationOptions: {
      //headerStyle: styles.header,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#5672a0"
      }
    }
  }
);

export default PrimaryNav;
