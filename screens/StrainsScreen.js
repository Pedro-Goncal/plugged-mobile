import React from "react";
import { View, Text } from "react-native";

import tw from "tailwind-react-native-classnames";

const StrainsScreen = () => {
  return (
    <View style={tw`flex-1 flex justify-center items-center bg-black`}>
      <Text style={tw`text-green-500`}>Strains Screen</Text>
    </View>
  );
};

export default StrainsScreen;
