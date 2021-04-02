import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 55,
    lineHeight: 90,
    fontFamily: "Montserrat-ExtraBold",
    color: "white",
    textAlign: "center",
    fontWeight: "500",
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  middle?: boolean;
}

function Slide({ title, middle }: SlideProps) {
  const transform = [
    // { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    // { translateX: -width / 2 },
    // { translateX: width / 2 },
    // { translateY: width / 2 - 20 },
    // { translateX: middle ? width / 2 - 200 : null },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default Slide;
