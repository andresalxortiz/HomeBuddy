import * as Font from "expo-font";

export default () => {
  return Font.loadAsync({
    "Montserrat-EB": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Poppins-B": require("../assets/fonts/Poppins-Medium.tff"),
  });
};
