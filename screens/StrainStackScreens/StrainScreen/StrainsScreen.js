import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// Icons
import { HeartIcon, StarIcon } from "react-native-heroicons/solid";

// Components
import SimilarStrains from "../../SimilarStrains";

const StrainsScreen = () => {
  return (
    <View className="flex-1 flex bg-black">
      <View className="border-white border-b-4 border-t-4">
        <Image
          source={{
            uri: "https://d3cfv1r84exbq1.cloudfront.net/wysiwyg/Appaerance-purple-haze-strain.jpg",
          }}
          className="w-full h-80 "
        />
      </View>
      <View className="flex flex-row justify-between items-center px-5 pt-8">
        <View className="flex-row">
          <Text className="text-green-500 pr-1 text-lg">Sativa</Text>
          <Text className="text-white text-lg">60%</Text>
        </View>
        <View className="flex-row">
          <Text className="text-green-500 pr-1 text-lg">THC</Text>
          <Text className="text-white text-lg">17%</Text>
        </View>
        <View className="flex-row">
          <Text className="text-[#DC8758] pr-1 text-lg">CBD</Text>
          <Text className="text-white text-lg">0%</Text>
        </View>
        <View>
          <HeartIcon className="" color="white" size={22} />
        </View>
      </View>
      <View className=" flex px-5 pt-3">
        <Text className="text-white">
          A lot of scientific jargan and bullshit about the strain gets written
          here. I think Purple Haze is more energetic and chatty but I don't
          know shit really.
        </Text>
      </View>
      <View className="pl-5 flex flex-row pt-3 ">
        <Text className="pl-2">
          <StarIcon className="" color="#DC8758" size={22} />
        </Text>
        <Text className="pl-2">
          <StarIcon className="" color="#DC8758" size={22} />
        </Text>
        <Text className="pl-2">
          <StarIcon className="" color="#DC8758" size={22} />
        </Text>
        <Text className="pl-2">
          <StarIcon className="" color="white" size={22} />
        </Text>
        <Text className="pl-2">
          <StarIcon className="" color="white" size={22} />
        </Text>
      </View>
      <View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white pl-5 pt-6 font-bold">
            Similar Strains
          </Text>
          <TouchableOpacity>
            <Text className="text-green-500 pt-6 pr-10 text-xs">See All</Text>
          </TouchableOpacity>
        </View>
        <SimilarStrains />
      </View>
    </View>
  );
};

export default StrainsScreen;
