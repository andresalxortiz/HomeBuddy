import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Species from "./species-screen";
import PetName from "./petname-screen";
import Weight from "./weight-screen";
import Neutered from "./neutered-screen";
import CreateProfile from "./profile-screen";

const OnBoardingStack = createStackNavigator();

// function getActiveRouteName() {
//   const route = route.params[route.name];

//   if (route.params) {
//     // visit nested navigators
//     return getActiveRouteName(route.params.name);
//   }
//   return route.name;
// }

function OnBoardContainer() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen
        name="Species"
        component={Species}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name="PetName"
        component={PetName}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name="Weight"
        component={Weight}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name="Neutered"
        component={Neutered}
        options={{ headerShown: false }}
      />
      <OnBoardingStack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />
    </OnBoardingStack.Navigator>
  );
}

export default OnBoardContainer;
