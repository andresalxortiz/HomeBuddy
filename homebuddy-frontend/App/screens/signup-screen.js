import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "white",
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
  inputWidth: {
    width: 180,
  },
  gapLeft: {
    marginLeft: 20,
  },
  border: {
    borderColor: "#075a51",
    opacity: 0.34,
    borderWidth: 2,
  },

  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
export function Signup({ navigation }) {
  const { control, handleSubmit, errors, setValue } = useForm();

  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  // handle the /login endpoint in the future
  const onSubmit = (d) => {
    console.log(d);
  };

  console.log("errors", errors);

  return (
    <View style={styles.container}>
      <View>
        <Text>logo and header will be here</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginLeft: 15,
          }}
        >
          <View>
            <Text style={styles.label}>First</Text>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "This is required" }}
              onFocus={() => {
                emailRef.current.focus;
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  style={[styles.input, styles.border, styles.inputWidth]}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={firstNameRef}
                />
              )}
            />
          </View>

          <View>
            <Text style={[styles.label, styles.gapLeft]}>Last</Text>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "This is required" }}
              onFocus={() => {
                passwordRef.current.focus;
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  style={[
                    styles.input,
                    styles.border,
                    styles.inputWidth,
                    styles.gapLeft,
                  ]}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={lastNameRef}
                />
              )}
            />
          </View>
        </View>

        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
          <View>
            <Text style={styles.label}>Email</Text>
            <Controller
              name="email"
              control={control}
              rules={{ required: "This is required" }}
              onFocus={() => {
                emailRef.current.focus;
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  style={[styles.input, styles.border]}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={emailRef}
                />
              )}
            />
          </View>

          <View>
            <Text style={[styles.label]}>Password</Text>
            <Controller
              name="password"
              control={control}
              rules={{ required: "This is required" }}
              onFocus={() => {
                passwordRef.current.focus;
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  style={[styles.input, styles.border]}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={passwordRef}
                />
              )}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color="white"
            title="Signup"
            onPress={() => {
              handleSubmit(onSubmit);
              setValue("");
              navigation.push("Signup");
            }}
          />
        </View>
      </View>
    </View>
  );
}
