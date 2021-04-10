import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Neutered() {
  return (
    <View>
      <View>
        <Text>Is your dog fixed?</Text>
      </View>

      <View>
        <Text></Text>
      </View>

      <View>
        <TextInput placeholder="Name" />
      </View>
    </View>
  );
}
