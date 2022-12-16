import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// Icons
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LocalNewsEventsCard = () => {
  return (
    <TouchableOpacity className="pt-5 pl-5 bg-white mr-3 shadow">
      <Image
        source={{
          uri: "https://azmarijuana.com/wp-content/uploads/2022/10/Dusk.jpg",
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-green-500 font-bold text-base pt-2">
          LOST IN THE WEEDS @ DUSK
        </Text>
        <Text className="text-green-500 font-bold text-base">
          MUSIC FESTIVAL
        </Text>
        <View className="flex-row items-center pl-1">
          <EvilIcons name="calendar" size={22} color="green" />
          {/* <StarIcon color="green" opacity={0.5} size={22} /> */}
          <Text className="text-green-500 text-xs pl-2">
            November 11th & 12th
          </Text>
        </View>
        <View className="flex-row items-center pl-1 pt-1">
          {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} /> */}
          <Ionicons name="location-outline" size={22} color="gray" />
          <Text className="text-xs text-gray-500">Tucson, AZ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocalNewsEventsCard;
