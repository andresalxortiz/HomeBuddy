import React from "react";
import { View } from "react-native";

import { Box, Button, Container, Text } from "../../components";
import TextInput from "../../components/form/text-input";

function Login() {
  return (
    <Container>
      <Box flex={1} padding="s">
        <Box
          // backgroundColor="transparent"s
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />

        <Text
          variant="hero"
          textAlign="left"
          color="title"
          fontSize={30}
          marginTop="xl"
        >
          Welcome back
        </Text>
        <Box
          top={-20}
          justifyContent="flex-start"
          alignContent="flex-start"
          flexDirection="row"
          // backgroundColor="grey"
          marginBottom="m"
        >
          <Text textAlign="left" variant="loginSubheader" color="shade">
            Sign in to your account
          </Text>
        </Box>
        <Box marginBottom="l">
          <TextInput textAlignVertical="center" placeholder="Email" />
        </Box>
        <TextInput secureTextEntry={true} placeholder="Enter your Password" />

        <Box
          flexDirection="row"
          // text

          justifyContent="flex-end"
          alignContent="flex-end"
          // justifyContent="space-evenly"
        >
          <Button
            variant="transparent"
            onPress={() => alert("Password Reseted")}
          >
            <Text
              color="primaryGreen"
              paddingLeft="xl"
              marginLeft="xxl"
              textAlign="right"
              variant="forgetPassword"
            >
              Forgot password?
            </Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button variant="primary" onPress={() => true} label="Continue" />
        </Box>

        <Box alignItems="center" marginTop="s">
          <Button variant="transparent" onPress={() => true}>
            <Box flexDirection="row" justifyContent="center">
              <Text variant="button" color="grey">
                Don’t have an account?
              </Text>
              <Text marginLeft="s" variant="button" color="primary">
                Sign Up here
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
