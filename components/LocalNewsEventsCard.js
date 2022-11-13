import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// Tailwind
import tw from "tailwind-react-native-classnames";

// Icons
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LocalNewsEventsCard = () => {
  return (
    <TouchableOpacity style={tw`pt-5 pl-5 bg-white mr-3 shadow`}>
      <Image
        source={{
          uri: "https://azmarijuana.com/wp-content/uploads/2022/10/Dusk.jpg",
        }}
        style={tw`h-36 w-64 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`text-green-500 font-bold text-base pt-2`}>
          LOST IN THE WEEDS @ DUSK
        </Text>
        <Text style={tw`text-green-500 font-bold text-base`}>
          MUSIC FESTIVAL
        </Text>
        <View style={tw`flex-row items-center pl-1`}>
          <EvilIcons name="calendar" size={22} color="green" />
          {/* <StarIcon color="green" opacity={0.5} size={22} /> */}
          <Text style={tw`text-green-500 text-xs pl-2`}>
            November 11th & 12th
          </Text>
        </View>
        <View style={tw`flex-row items-center pl-1 pt-1`}>
          {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} /> */}
          <Ionicons name="location-outline" size={22} color="gray" />
          <Text style={tw`text-xs text-gray-500`}>Tucson, AZ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocalNewsEventsCard;
