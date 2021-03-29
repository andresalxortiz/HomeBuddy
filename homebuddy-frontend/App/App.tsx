// import {Routes} from './components/routes'

// export default Routes

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "./src/authentication/onboarding";
import { LoadAssets } from "./components";

const fonts = {
  "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
};

const AuthenticationStack = createStackNavigator();
function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
}

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
