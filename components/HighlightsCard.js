import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HighlightsCard = () => {
  return (
    <View className="flex flex-row pr-10 ">
      <TouchableOpacity className="bg-black rounded-lg p-3  border-4 border-white">
        <Text className="text-white font-bold text-base">
          Arizona's 2nd Annual Cannabis Cup is Coming December 2nd!
        </Text>
        <Text className="text-[#169F80]"> HighTimes Oct 22nd</Text>
        <Text className="text-white pt-2">
          It would be pretty cool if this was actually a thing. So anywyas here
          is the text space for a non photo news/events article and this is the
          stupid lorem ipsum the quick brown fox jumped over the fence kinda
          thing. I am going to copy this paragraph to fill up space.
        </Text>
        <View className="">
          <Text className="text-white pt-2">
            It would be pretty cool if was actually a thing. So anyways here is
            the text space for a non photo news/events article and this is the
            stupid lorem ipsum the quick brown fox jumped over the fence kinda
            thing.
          </Text>
          <Text className="text-[DC8758] font-bold">Read More</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HighlightsCard;
