import React, { ReactHTML, ReactNode, Ref } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

import { Box, theme } from "../../components";

const styles = StyleSheet.create({
  customBorder: {
    borderBottomColor: "#dddfe6",
  },
});

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon?: "eye" | "eye-off";
  borderBottomWidth?: StyleProp<number>;
  placeHolderStyle?: StyleProp<string>;
  secureTextInput?: StyleProp<boolean>;
  inputRef?: Ref<any>;
}

function TextInput({
  placeholder,
  icon,
  borderBottomWidth,
  secureTextEntry,
  ...props
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
          onBlur={props.onBlur}
          {...{ placeholder, borderBottomWidth, secureTextEntry }}
          {...props}
        />
      </Box>
      <Box padding="s">
        <Icon name={icon} size={14} color={theme.colors.shade} />
      </Box>
    </Box>
  );
}

export default TextInput;
