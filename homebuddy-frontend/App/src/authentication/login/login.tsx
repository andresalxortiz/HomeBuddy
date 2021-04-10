import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";

import { Box, Button, Container, Text } from "../../components";
import TextInput from "../../components/form/text-input";

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const {
    control,
    handleSubmit,
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
        <Box marginBottom="l">
          <Controller
            render={({ field: { onBlur, onChange, value, ref } }) => (
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
                inputRef={emailRef}
                onFocus={() => {
                  emailRef.current?.focus;
                }}
              />
            )}
            control={control}
            name="email"
            rules={{ required: true }}
          />
          {errors.email && (
            <Text style={{ color: "red", marginTop: 5 }}>Email required.</Text>
          )}
        </Box>

        <Controller
          render={({
            field: { onBlur, onChange, value, ref },
            fieldState: { isTouched },
          }) => (
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
              inputRef={ref}
              onFocus={() => {
                passwordRef.current?.focus;
              }}
            />
          )}
          control={control}
          name="password"
          rules={{ required: true }}
        />
        {errors.password && (
          <Text style={{ color: "red", marginTop: 5 }}>Password required.</Text>
        )}

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
