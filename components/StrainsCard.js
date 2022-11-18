import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import { StarIcon } from "react-native-heroicons/solid";

const StrainsCard = () => {
  return (
    <View className="pt-5">
      <TouchableOpacity className="flex flew-row items-center">
        <Image
          source={require("../assets/backgrounds/highlightStrain.png")}
          className="rounded-lg"
        />
        <Text className="text-white absolute text-xl font-bold pr-44 pt-5">
          Purple Haze
        </Text>
        <View className="absolute mt-52 ml-2 mr-28 rounded-lg border-2 border-white pb-4 bg-black">
          <View className="flex flex-row items-center pt-2 pr-2">
            <Text style={tw`text-green-500 font-bold pl-2 pr-2`}>Sativa</Text>

            <Text className="text-white font-bold">60%</Text>
            <Text className="text-green-500 font-bold pl-2">THC</Text>
            <Text className="text-white font-bold pl-1">17%</Text>
            <Text className="text-[#DC8758] font-bold pl-2">CBD</Text>
            <Text className="text-white font-bold pl-1">0%</Text>
          </View>

          <Text style={tw`text-xs text-white pl-2 pr-2`}>
            A lot of scientific jargon and bullshit about the strain gets
            written here. I think Purple Haze is more energetic and chatty but I
            don't know shit really.
          </Text>

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
    </View>
  );
};

export default StrainsCard;
