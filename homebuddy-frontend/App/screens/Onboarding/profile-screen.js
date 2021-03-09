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

export default function CreateProfile({ navigation, route }) {
  const { control, handleSubmit, errors, setValue } = useForm();
  const genderRef = React.useRef();
  const birthDateRef = React.useRef();
  const breedRef = React.useRef();
  const lastVisitRef = React.useRef();

  // i'll most likely grab the register object from useForm to send the data

  const onSubmit = (d) => {
    console.log(d);
  };

  console.log("errors", errors);
  return (
    <View style={styles.container}>
      <View>
        <Text>Image Logo and Wording Here</Text>

        <View>
          <Text style={styles.label}>Sex</Text>
          <Controller
            name="Gender"
            control={control}
            rules={{ required: "This is required" }}
            onFocus={() => {
              genderRef.current.focus;
            }}
            render={(props) => (
              <TextInput
                {...props}
                style={[styles.input, styles.border, styles.inputWIdth]}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
                ref={genderRef}
              />
            )}
          />
        </View>

        <View>
          <Text style={styles.label}>Birthdate</Text>
          <Controller
            name="Birthdate"
            control={control}
            rules={{ required: "This is required" }}
            onFocus={() => {
              birthDateRef.current.focus;
            }}
            render={(props) => (
              <TextInput
                {...props}
                style={[styles.input, styles.border, styles.inputWIdth]}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
                ref={birthDateRef}
              />
            )}
          />
        </View>

        <View>
          <Text style={styles.label}>Breed</Text>
          <Controller
            name="Breed"
            control={control}
            rules={{ required: "This is required" }}
            onFocus={() => {
              breedRef.current.focus;
            }}
            render={(props) => (
              <TextInput
                {...props}
                style={[styles.input, styles.border, styles.inputWIdth]}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
                ref={birthDateRef}
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.label}>Last Trip to Vet</Text>
          <Controller
            name="VetDate"
            control={control}
            rules={{ required: "This is required" }}
            onFocus={() => {
              lastVisitRef.current.focus;
            }}
            render={(props) => (
              <TextInput
                {...props}
                style={[styles.input, styles.border, styles.inputWIdth]}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
                ref={lastVisitRef}
              />
            )}
          />
        </View>

        {/* <View style={styles.button}>
            <Button
              color="white"
              title="Login"
              onPress={() => {
                handleSubmit(onSubmit);
                setValue("");
                navigation.push("Signup");
              }}
            />
          </View> */}
      </View>
    </View>
  );
}
