import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { Button } from "../../../components";

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    backgroundColor: "white",
    // borderTopRightRadius: 65,
    // borderTopLeftRadius: 65,
  },
  subtitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
    textAlign: "center",
  },
  description: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    lineHeight: 20,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

interface SubSlideProps {
  subtitle: string;
  desc: string;
  last?: boolean;
  onPress: () => void;
}

function SubSlide({ subtitle, desc, last, onPress }: SubSlideProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{desc}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
}

export default SubSlide;
