import React from "react";
import { Button } from "../../components";
import { Routes, StackNavigationProps } from "../../components/navigation";
import { Box, Text } from "../../components/theme";

function Welcome({ navigation }: StackNavigationProps<Routes, "Welcome">) {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="transparent"
        alignItems="center"
        justifyContent="flex-end"
      ></Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="transparent"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button label="Join us, it's Free" />
          <Button variant="transparent" label="Forgot password" />
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
