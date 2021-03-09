import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { TextInput } from "react-native-gesture-handler";

// import {ScreenContainer} from '../lib/screen-container'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
  },
  label: {
    color: "#646464",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    display: "flex",
    // width: 140,
    // justifyContent: "space-between",
    backgroundColor: "#075a51",
    height: 40,
    borderRadius: 4,
  },
  input: {
    backgroundColor: "#e7f5f7",
    opacity: 0.34,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  border: {
    borderColor: "#075a51",
    opacity: 0.34,
    borderWidth: 2,
  },
});

export function Login({ navigation }) {
  const { control, handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "helo",
    },
  });
  const passwordRef = React.useRef();
  const emailRef = React.useRef();
  // handle the /login endpoint in the future
  const onSubmit = (d) => {
    console.log(d);
  };

  console.log("errors", errors);
  return (
    <View style={styles.container}>
      <View>
        <Text>Image Logo and Wording Here</Text>

        <View>
          <Text style={styles.label}>Email</Text>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{ required: "This is required" }}
            onFocus={() => {
              emailRef.current.focus;
            }}
            render={(props) => (
              <TextInput
                {...props}
                style={[styles.input, styles.border, styles.inputWIdth]}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
                ref={emailRef}
              />
            )}
          />
        </View>

        <View>
          <Text style={styles.label}>Password</Text>
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{
              required: "This is required",
              minLength: { value: 8, message: "must be at min 8 chars long" },
              validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value),
                  ) || "must include lower, upper, number, and special chars"
                );
              },
            }}
            onFocus={() => {
              passwordRef.current.focus;
            }}
            render={(props) => (
              <TextInput
                {...props}
                style={[styles.input, styles.border, styles.inputWIdth]}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
                ref={passwordRef}
              />
            )}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="white"
            title="Login"
            onPress={() => {
              handleSubmit(onSubmit);
              navigation.navigate("Signup");
            }}
          />
        </View>
      </View>
    </View>
  );
}
