import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const FilterOptionsCard = () => {
  return (
    <View className="flex-row justify-between pt-5">
      <TouchableOpacity className="pl-8">
        <Image source={require("../assets/icons/Location.png")} />
        <Text className="text-white text-xs text-center pt-3 font-medium">
          Nearby
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/icons/Deliveries.png")} />
        <Text className="text-white text-xs text-center pt-3 font-medium">
          Deliveries
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/icons/DriveThru.png")} />
        <Text className="text-white text-xs text-center pt-3 font-medium">
          Drive Thru
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="pr-8">
        <Image source={require("../assets/icons/24hrs.png")} />
        <Text className="text-white text-xs text-center pt-3 font-medium">
          24 Hours
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterOptionsCard;
