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
    height: 160,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 20,
  },
  headerContainer: {
    paddingTop: 61,
    // paddingLeft: 46,
    // paddingRight: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#e7f5f7",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 80,
  },
  decisionContainer: {
    display: "flex",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 60,
    paddingTop: 69,
    justifyContent: "center",
    alignItems: "center",
  },

  decisionHeader: {
    color: "#646464",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 56,
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  breed: {
    color: "#646464",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 48,
    marginTop: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 100,
  },
});

export default function Species({ navigation: { goBack, navigate } }) {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>PawPal</Text>
        </View>
      </View>

      <View style={styles.decisionContainer}>
        <Text style={styles.decisionHeader}>Choose your Pawpal.</Text>
      </View>

      <View style={styles.imageContainer}>
        <View>
          <Image source={require("../../assets/images/dog-face.png")} />
          <Text style={styles.breed}>DOG</Text>
        </View>
        <View>
          <Image source={require("../../assets/images/cat-face.png")} />
          <Text style={styles.breed}>CAT</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={require("../../assets/icons/arrow-left-circle.png")}
            style={{ height: 60, width: 60 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("PetName")}>
          <Image
            source={require("../../assets/icons/arrow-right-circle.png")}
            style={{ height: 60, width: 60 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
