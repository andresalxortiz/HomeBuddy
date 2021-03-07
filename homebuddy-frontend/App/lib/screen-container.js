import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export function ScreenContainer({ children }) {
  <View style={styles.container}>{children}</View>;
}
