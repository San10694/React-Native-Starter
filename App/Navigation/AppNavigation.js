import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Routes from "./Routes";
//import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
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

// export default PrimaryNav;
export default createAppContainer(PrimaryNav);
