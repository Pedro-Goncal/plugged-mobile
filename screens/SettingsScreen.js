import React from "react";
import { View, Text } from "react-native";

import tw from "tailwind-react-native-classnames";

const SettingsScreen = () => {
  return (
    <View style={tw`flex-1 flex justify-center items-center bg-black`}>
      <Text style={tw`text-green-500`}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
