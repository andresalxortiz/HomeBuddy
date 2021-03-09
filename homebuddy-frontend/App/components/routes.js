import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Text } from "react-native";

/**
 * TODO: refactor this so all screens come from one source export default {...}
 */

import { Home } from "../screens/home-screen";
import { Login } from "../screens/login-screen";
import { Signup } from "../screens/signup-screen";

import OnBoardContainer from "../screens/Onboarding/index";

const Stack = createStackNavigator();

export function Routes({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Species" component={OnBoardContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
