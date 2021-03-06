import React from "react";
// import {
//   createBottomTabNavigator,
//   createAppContainer
// } from "@react-navigation/native";
import { Icon } from "native-base";
import { Image } from "react-native";
import Home from "./Screens/Home/index";
import Login from "./Screens/Login/index";
import SignUp from "./Screens/SignUp/index";
import ChildRegistration from "./Screens/ChildRegistration/index";
import ViewAllChilds from "./Screens/ViewAllChilds/index";
import Profile from "./Screens/Profile/index";
import MyGroups from "./Screens/MyGroups/index";
import AboutUs from "./Screens/AboutUs/index";
import CreateGroup from "./Screens/CreateGroup/index";
import OrderWatch from "./Screens/OrderWatch/index";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (

    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="OrderWatch"
        headerMode="none"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChildRegistration" component={ChildRegistration} />
        <Stack.Screen name="ViewAllChilds" component={ViewAllChilds} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyGroups" component={MyGroups} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="OrderWatch" component={OrderWatch} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const AppNavigator = createStackNavigator(
//   {

//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         // color:"#1A5CAD",
//         //tabBarActiveTintColor
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="ios-home" size={20} style={{ color: "white" }} />
//         )
//       }
//     },

//   },
//   {
//     // tabBarOptions: {
//     //   activeTintColor: "white",
//     //   inactiveTintColor: 'white',
//     //   style: {
//     //     backgroundColor: 'red',
//     //   },
//     // },

//     initialRouteName: "Home"
//   }
// );
export default AppNavigator;
// export default createAppContainer(AppNavigator);