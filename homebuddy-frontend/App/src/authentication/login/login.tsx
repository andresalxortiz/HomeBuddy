import React, { SyntheticEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Button, Container, Text } from "../../components";
import TextInput from "../../components/form/text-input";

interface FormData {
  email?: string;
  password?: string;
}

function Login() {
  const emailRef = React.useRef<typeof TextInput | null>(null);
  const passwordRef = React.useRef<typeof TextInput | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // check to see if we're getting data
  const onSubmit = handleSubmit(({ email, password }: FormData) => {
    Alert.alert("Data", `Email: ${email}\nPassword: ${password}`);
    // lets clear the form values
    reset();
  });

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
        <Controller
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <Box
              marginBottom="l"
              // style={{
              //   borderColor: emailRef ? "rgba(7, 90, 81, 0.34)" : "transparent",
              //   borderWidth: value ? 2 : 0,
              //   borderRadius: 4,
              // }}
            >
              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                onSubmitEditing={() => passwordRef.current?.focus()}
                returnKeyType="next"
                textAlignVertical="center"
                placeholder="Email"
                textContentType="emailAddress"
                value={value}
                ref={emailRef}
                onFocus={() => emailRef.current?.focus()}
              />
              {errors.email && (
                <Text style={{ color: "red", marginTop: 5 }}>
                  Email required.
                </Text>
              )}
            </Box>
          )}
          control={control}
          name="email"
          rules={{ required: true }}
        />

        <Controller
          render={({
            field: { onBlur, onChange, value, ref },
            fieldState: { isTouched },
          }) => (
            <Box>
              <TextInput
                icon={value ? "eye-off" : "eye"}
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                onSubmitEditing={onSubmit}
                returnKeyType="done"
                secureTextEntry={true}
                placeholder="Enter your Password"
                textContentType="password"
                value={value}
                ref={passwordRef}
                selectTextOnFocus={true}
              />
              {errors.password && (
                <Text style={{ color: "red", marginTop: 5 }}>
                  Password required.
                </Text>
              )}
            </Box>
          )}
          control={control}
          name="password"
          rules={{ required: true }}
        />

        <Box
          flexDirection="row"
          justifyContent="flex-end"
          alignContent="flex-end"
        >
          <TouchableWithoutFeedback onPress={() => alert("Password Reseted")}>
            <Text
              color="primaryGreen"
              paddingLeft="xl"
              marginLeft="xxl"
              marginTop="m"
              textAlign="right"
              variant="forgetPassword"
            >
              Forgot password?
            </Text>
          </TouchableWithoutFeedback>
        </Box>
        <Box alignItems="center" marginTop="l">
          <Button variant="primary" onPress={onSubmit} label="Continue" />
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
