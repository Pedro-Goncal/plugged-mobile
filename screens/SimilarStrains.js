import { View, Text, Image } from "react-native";
import React from "react";

const SimilarStrains = () => {
  return (
    <View className="pt-3 flex flex-row justify-evenly pr-8">
      <Image
        source={{
          uri: "https://uploads.medicaljane.com/wp-content/uploads/2013/09/veganSuperLemonHazeHD10.jpg",
        }}
        className="w-44 h-36 rounded-2xl border-white border-2"
      />
      <Image
        source={{
          uri: "https://leafly-public.imgix.net/strains/reviews/photos/cannalope-haze__primary_a13c.jpg",
        }}
        className="w-44 h-36 rounded-2xl border-white border-2"
      />
    </View>
  );
};

export default SimilarStrains;
