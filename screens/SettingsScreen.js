import React from "react";
import { View, Text } from "react-native";

// import tw from "tailwind-react-native-classnames";
// import tw from "twrnc";

const SettingsScreen = () => {
  return (
    // <View style={tw`flex-1 flex justify-center items-center bg-black`}>
    //   <Text style={tw`text-green-500`}>Settings Screen</Text>
    // </View>
    <View className="flex-1 flex justify-center items-center bg-black">
      <Text className="text-red-500">
        Yes!!! We can do just classNames now for our styling
      </Text>
    </View>
  );
};

export default SettingsScreen;
