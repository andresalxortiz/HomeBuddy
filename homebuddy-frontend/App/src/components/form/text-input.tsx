import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box } from "../theme";

const styles = StyleSheet.create({
  customBorder: {
    borderBottomColor: "#dddfe6",
  },
});

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  borderBottomWidth?: StyleProp<number>;
  placeHolderStyle?: StyleProp<string>;
  secureTextInput?: StyleProp<boolean>;
}

function TextInput({
  placeholder,
  borderBottomWidth,
  secureTextEntry,
}: TextInputProps) {
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      backgroundColor="offgrey"
      padding="s"
      // borderWidth={1}
    >
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          {...{ placeholder, borderBottomWidth, secureTextEntry }}
        />
      </Box>
    </Box>
  );
}

export default TextInput;
