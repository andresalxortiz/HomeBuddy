import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#075A51",
    height: 460,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 20,
  },
  headerContainer: {
    paddingTop: 61,
    // paddingLeft: 46,
    // paddingRight: 42,

    display: "flex",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",

    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#075A51",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 56,
    textAlign: "center",
    marginTop: 50,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 70,
  },

  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#e7f5f7",
    opacity: 0.34,
    height: 40,
    width: 260,
    marginTop: 175,
    height: 80,
    padding: 10,
    borderRadius: 18,
  },
  border: {
    borderColor: "#075a51",
    opacity: 0.34,
    borderWidth: 4,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 100,
  },
});

export default function PetName({ navigation: { goBack, navigate } }) {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: "rgba(7,90,81,0.34)" }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>What is your dog's name?</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/dog-bone.png")} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={[styles.border, styles.input]} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={require("../../assets/icons/arrow-left-circle.png")}
            style={{ height: 60, width: 60 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Weight")}>
          <Image
            source={require("../../assets/icons/arrow-right-circle.png")}
            style={{ height: 60, width: 60 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
