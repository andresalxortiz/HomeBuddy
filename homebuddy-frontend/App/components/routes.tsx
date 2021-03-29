import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/**
 * TODO: refactor this so all screens come from one source export default {...}
 */

import { Home } from "../screens/home-screen";
import { Login } from "../screens/login-screen";
import { Signup } from "../screens/signup-screen";

import OnBoardContainer from "../screens/Onboarding/index";

const AuthenticationStack = createStackNavigator();

export function Routes({}) {
  return (
    <NavigationContainer>
      <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthenticationStack.Screen name="Home" component={Home} />
        <AuthenticationStack.Screen name="Login" component={Login} />
        <AuthenticationStack.Screen name="Signup" component={Signup} />
        <AuthenticationStack.Screen
          name="Species"
          component={OnBoardContainer}
        />
      </AuthenticationStack.Navigator>
    </NavigationContainer>
  );
}
