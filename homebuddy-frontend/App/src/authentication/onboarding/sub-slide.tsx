import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "../../components";

const BORDER_RADIUS = 65;

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
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
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
      <Text variant="title" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {desc}
      </Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
}

export default SubSlide;
