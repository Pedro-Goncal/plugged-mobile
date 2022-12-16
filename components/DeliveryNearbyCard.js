import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";

// Icons
import { StarIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";
import { LocationMarkerIcon } from "react-native-heroicons/outline";

const DeliveryNearbyCard = () => {
  return (
    <TouchableOpacity className="pt-5 pl-5 bg-white mr-3 shadow">
      <Image
        source={{
          uri: "https://www.google.com/maps/uv?pb=!1s0x872b1314640697a5%3A0x5dd28b8baee25fb6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMHzk31lnm98mLTPx5OpXPZzFIgQLv2eh_Bx6DE%3Dw260-h175-n-k-no!5saz%20dispensaries%20near%20me%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMHzk31lnm98mLTPx5OpXPZzFIgQLv2eh_Bx6DE&hl=en&sa=X&ved=2ahUKEwiqlKbuyaL7AhVYEUQIHTWICC8Q7ZgBKAB6BAgGEAI#",
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-green-500 font-bold text-lg pt-2">
          Ponderosa Dispensary
        </Text>
        <View className="flex-row items-center pl-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-green-500 text-xs pl-2">4.5</Text>
        </View>
        <View className="flex-row items-center pl-1 pt-1">
          {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} /> */}
          <Ionicons name="location-outline" size={22} color="gray" />
          <Text className="text-xs text-gray-500">
            Nearby - 9240 W Northern Ave #103B
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryNearbyCard;
