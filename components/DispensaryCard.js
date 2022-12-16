import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { dispensaries } from "../utils/utilObjects";

// Icons
import { StarIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//Redux
import { useDispatch } from "react-redux";
import { selectDispensery } from "../redux/slices/dispenseriesSlice";
import StarRatings from "./StarRatings/StarRatings";

const DispensaryCard = ({ dispensary }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View className="px-3">
      <TouchableOpacity
        className="mx-3"
        onPress={() => {
          dispatch(selectDispensery(dispensary));
          navigation.navigate("DispensaryScreen");
        }}
      >
        <Image
          source={{ uri: dispensary.imgUrl }}
          className="object-contain rounded-xl h-96 w-80"
        />
        <View className="absolute pt-5 pl-3">
          <Image
            className="border-2 border-black rounded-xl h-16 w-16 "
            source={{ uri: dispensary.logoUrl }}
          />
        </View>
        <View className="absolute mt-52 ml-2 mr-1 rounded-lg border-2 border-white pb-4 bg-black">
          <View className="flex flex-row items-center pt-2 pr-2">
            <Text className="text-green-500 font-bold text-lg pl-2 pr-2">
              {dispensary.name}
            </Text>
            <Text className="">
              <HeartIcon className="" color="white" size={22} />
            </Text>
          </View>
          <Text className="text-xs text-white pl-2 pr-2">
            Address - {dispensary.address}
          </Text>
          <Text className="text-white text-xs pl-2">
            Phone: {dispensary.phone}
          </Text>
          <View className="flex flex-row items-center">
            <Text className="text-[#DC8758] text-xs pl-2">Closed</Text>
            <Text className="text-white text-xs pl-2">
              Opens {dispensary.hours}, {dispensary.days}
            </Text>
          </View>
          <View className="flex-row items-center pl-1 pt-1">
            <View className="pl-1 flex flex-row">
              <StarRatings rating={dispensary.rating} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default DispensaryCard;
