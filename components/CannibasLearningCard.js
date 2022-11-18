import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CannibasLearningCard = () => {
  return (
    <TouchableOpacity>
      <View className="pt-5 pl-4">
        <Image
          className=""
          source={require("../assets/backgrounds/canabisLearning.png")}
        />
      </View>
      <View className="absolute mt-52 ml-2 mr-1 rounded border-2 border-white pb-4 bg-black"></View>
    </TouchableOpacity>
  );
};

export default CannibasLearningCard;
