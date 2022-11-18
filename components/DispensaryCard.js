import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";

// Tailwind
import tw from "tailwind-react-native-classnames";

// Icons
import { StarIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";

import { Ionicons } from "@expo/vector-icons";

const DispensaryCard = () => {
  return (
    <TouchableOpacity style={tw`rounded-xl mr-5`}>
      <Image
        source={require("../assets/backgrounds/dispensary-bg.png")}
        style={tw`rounded-sm`}
      />
      <View className="absolute pt-5 pl-3">
        <Image
          className="border-2 border-white rounded-lg"
          source={require("../assets/icons/dispensaryIcon.png")}
        />
      </View>
      <View className="absolute mt-52 ml-2 mr-1 rounded-lg border-2 border-white pb-4 bg-black">
        <View className="flex flex-row items-center pt-2 pr-2">
          <Text style={tw`text-green-500 font-bold text-lg pl-2 pr-2`}>
            Plugged Dispensary
          </Text>
          <Text className="">
            <HeartIcon className="" color="white" size={22} />
          </Text>
        </View>

        <Text style={tw`text-xs text-white pl-2 pr-2`}>
          Address - Fake Boulevard #69, Phoenix, AZ 85029
        </Text>
        <Text className="text-white text-xs pl-2">Phone: 420-420-6969</Text>
        <View className="flex flex-row items-center">
          <Text className="text-[#DC8758] text-xs pl-2">Closed</Text>
          <Text className="text-white text-xs pl-2">
            Opens 9am - 9pm, Mon-Sat
          </Text>
        </View>

        <View style={tw`flex-row items-center pl-1 pt-1`}>
          <Text style={tw`text-green-500 text-xs pl-1`}>4</Text>
          <View className="pl-1 flex flex-row">
            <StarIcon className="" color="#DC8758" size={16} />
            <StarIcon className="" color="#DC8758" size={16} />
            <StarIcon className="" color="#DC8758" size={16} />
            <StarIcon className="" color="#DC8758" size={16} />
            <StarIcon className="" color="white" size={16} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DispensaryCard;
