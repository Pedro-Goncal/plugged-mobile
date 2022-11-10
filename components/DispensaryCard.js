import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";

// Tailwind
import tw from "tailwind-react-native-classnames";

// Icons
import { StarIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";

const DispensaryCard = () => {
  return (
    <TouchableOpacity style={tw`pt-5 pl-5 bg-white mr-3 shadow`}>
      <Image
        source={{
          uri: "https://www.google.com/maps/uv?pb=!1s0x872b41c6ce811e73%3A0xbec99423dcdbbbc0!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM0d2nzI90XTZvHnyxXfrUBJv86I9A9IVa7GIGL%3Dw130-h87-n-k-no!5sdispensaries%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipM0d2nzI90XTZvHnyxXfrUBJv86I9A9IVa7GIGL&hl=en&sa=X&ved=2ahUKEwjEuY_OpqL7AhXVLEQIHdQ6A-4Q7ZgBKAF6BAgJEAM#",
        }}
        style={tw`h-36 w-64 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`text-green-500 font-bold text-lg pt-2`}>
          Ponderosa Dispensary
        </Text>
        <View style={tw`flex-row items-center pl-1`}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={tw`text-green-500 text-xs pl-2`}>4.5</Text>
        </View>
        <View style={tw`flex-row items-center pl-1 pt-1`}>
          {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} /> */}
          <Ionicons name="location-outline" size={22} color="gray" />
          <Text style={tw`text-xs text-gray-500`}>
            Nearby - 9240 W Northern Ave #103B
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DispensaryCard;
