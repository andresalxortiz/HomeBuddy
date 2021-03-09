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
    paddingTop: 80,
    // paddingLeft: 46,
    // paddingRight: 42,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#646464",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 37,
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },

  inputContainer: {
    display: "flex",
    height: 600,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  border: {
    borderWidth: 4,
  },

  input: {
    // backgroundColor: "#e7f5f7",
    // opacity: 0.34,
    width: 320,
    marginTop: 50,
    height: 80,
    padding: 10,
    borderRadius: 18,
  },
  text: {
    color: "#075a51",
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default function Weight({ navigation: { goBack, navigate } }) {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>What is your dog's size?</Text>
      </View>

      <View style={styles.cardContainer}>
        <View
          style={[
            styles.input,
            styles.border,
            {
              backgroundColor: "rgba(231,245,247,0.33)",
              borderColor: 'rgba(7, 90, 81, 0.34)"',
            },
          ]}
        >
          <Text style={styles.text}>Small (0-25lbs)</Text>
        </View>
        <View
          style={[
            styles.input,
            styles.border,
            {
              backgroundColor: "rgba(231,245,247,0.33)",
              borderColor: 'rgba(7, 90, 81, 0.34)"',
            },
          ]}
        >
          <Text style={styles.text}>Medium(25-50lbs)</Text>
        </View>
        <View
          style={[
            styles.input,
            styles.border,
            {
              backgroundColor: "rgba(231,245,247,0.33)",
              borderColor: 'rgba(7, 90, 81, 0.34)"',
            },
          ]}
        >
          <Text style={styles.text}>Large(50+lbs)</Text>
        </View>
      </View>
    </View>
  );
}
