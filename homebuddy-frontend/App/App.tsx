// import {Routes} from './components/routes'

// export default Routes

import React from "react";
import { AuthenticationNavigator } from "./src/authentication";
import { LoadAssets, theme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";

const fonts = {
  "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),

  "Iter-Light-300": require("../assets/fonts/Inter-Light.ttf"),
  "Iter-Regular-400": require("../assets/fonts/Inter-Regular.ttf"),
  "Iter-Medium-500": require("../assets/fonts/Inter-Medium.ttf"),
  "Iter-SemiBold-600": require("../assets/fonts/Inter-SemiBold.ttf"),
  "Iter-Bold-700": require("../assets/fonts/Inter-Bold.ttf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
