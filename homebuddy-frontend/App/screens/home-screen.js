import React from "react";
import { useForm } from "react-hook-form";
// import {ScreenContainer} from '../lib/screen-container'
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "white",
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    // display: "flex",
    width: 140,
    // justifyContent: "space-between",
    backgroundColor: "#075a51",
    opacity: 0.33,
    height: 40,
    borderRadius: 4,
  },
});

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>PawPals</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={styles.button}>
          <Button
            title="Signup"
            color="white"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Login"
            color="white"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
}
