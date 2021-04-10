import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/navigation";
import Onboarding from "./onboarding";
import Welcome from "./Welcome";
import Login from "./login";

const AuthenticationStack = createStackNavigator<Routes>();
export function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
}
