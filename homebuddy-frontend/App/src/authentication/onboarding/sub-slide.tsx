import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components";

const BORDER_RADIUS = 65;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
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
