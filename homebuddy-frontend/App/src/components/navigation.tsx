import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

// utility interface found from stackoverflow
// support for react navigation 5
export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
};

// import { Home } from "../screens/home-screen";
// import { Login } from "../screens/login-screen";
// import { Signup } from "../screens/signup-screen";

// import OnBoardContainer from "../screens/Onboarding/index";

// const AuthenticationStack = createStackNavigator();

// export function Routes({}) {
//   return (
//     <NavigationContainer>
//       <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
//         <AuthenticationStack.Screen name="Home" component={Home} />
//         <AuthenticationStack.Screen name="Login" component={Login} />
//         <AuthenticationStack.Screen name="Signup" component={Signup} />
//         <AuthenticationStack.Screen
//           name="Species"
//           component={OnBoardContainer}
//         />
//       </AuthenticationStack.Navigator>
//     </NavigationContainer>
//   );
// }
