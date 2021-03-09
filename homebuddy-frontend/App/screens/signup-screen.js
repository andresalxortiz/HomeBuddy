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
  const { control, handleSubmit, errors, register, setError } = useForm({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      userName: "johnydoe",
      email: "email@email.com",
      password: "P@ssw0word!",
    },
  });

  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const userNameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [submitting, setSubmitting] = React.useState(false);

  // handle the /login endpoint in the future
  // not using atm
  const onSubmit = (d) => {
    console.log(d);
    navigation.navigate("Species");
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
                firstNameRef.current.focus;
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  style={[styles.input, styles.border, styles.inputWidth]}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={register(firstNameRef, { required: "required" })}
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
                lastNameRef.current.focus;
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
                  ref={register(lastNameRef, { required: "required" })}
                />
              )}
            />
          </View>
        </View>

        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
          <View>
            <Text style={styles.label}>Username</Text>
            <Controller
              name="userName"
              control={control}
              rules={{ required: "This is required" }}
              onFocus={() => {
                userNameRef.current.focus;
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  style={[styles.input, styles.border]}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={register(userNameRef, { required: "required" })}
                />
              )}
            />
          </View>
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
                  ref={register(emailRef, { required: "required" })}
                />
              )}
            />
          </View>

          <View>
            <Text style={[styles.label]}>Password</Text>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "This is required",
                minLength: { value: 8, message: "must be at min 8 chars long" },
                validate: (value) => {
                  return (
                    [
                      /[a-z]/,
                      /[A-Z]/,
                      /[0-9]/,
                      /[^a-zA-Z0-9]/,
                    ].every((pattern) => pattern.test(value)) ||
                    "must include lower, upper, number, and special chars"
                  );
                },
              }}
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
                  ref={register(passwordRef, { required: "required" })}
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
              handleSubmit(async (formData) => {
                setSubmitting(true);
                setError(_, {});
                // token can be used for a ref later on

                const response = await fetch("/api/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    userName: formData.userName,
                    email: formData.email,
                    password: formData.password,
                  }),
                });
                const data = await response.json();

                // if we run into errors lets keep them in an object
                if (data.errors) {
                  setError(_, errors);
                } else {
                  return;
                }
                // this should push to PetName onboarding screen
                setSubmitting(false);
              });
              navigation.navigate("Species");
              // onPress={handleSubmit(onSubmit)}
            }}
            // disabled={submitting}
          />
        </View>
      </View>
    </View>
  );
}
