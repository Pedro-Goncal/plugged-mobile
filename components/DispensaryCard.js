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
// Tailwind
import tw from "tailwind-react-native-classnames";
// Icons
import { StarIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//Redux
import { useDispatch } from "react-redux";
import { selectDispensery } from "../redux/slices/dispenseriesSlice";
import StarRatings from "./StarRatings/StarRatings";

const Item = ({ name }) => (
  <View className="">
    <Text className="text-white">{name}</Text>
  </View>
);
const DispensaryCard = ({
  name,
  address,
  phone,
  hours,
  days,
  imgUrl,
  logoUrl,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <FlashList
      data={dispensaries}
      horizontal
      initialNumToRender={3}
      // keyExtractor={(item) => item.id.toString()}
      estimatedItemSize={5}
      renderItem={({ item }) => (
        <View style={tw`px-3`}>
          <TouchableOpacity
            className="mx-3"
            onPress={() => {
              dispatch(selectDispensery(item));
              navigation.navigate("DispensaryScreen");
            }}
          >
            <Image
              source={{ uri: item.imgUrl }}
              className="object-contain rounded-xl h-96 w-80"
            />
            <View className="absolute pt-5 pl-3">
              <Image
                className="border-2 border-black rounded-xl h-16 w-16 "
                source={{ uri: item.logoUrl }}
              />
            </View>
            <View className="absolute mt-52 ml-2 mr-1 rounded-lg border-2 border-white pb-4 bg-black">
              <View className="flex flex-row items-center pt-2 pr-2">
                <Text style={tw`text-green-500 font-bold text-lg pl-2 pr-2`}>
                  {item.name}
                </Text>
                <Text className="">
                  <HeartIcon className="" color="white" size={22} />
                </Text>
              </View>
              <Text style={tw`text-xs text-white pl-2 pr-2`}>
                Address - {item.address}
              </Text>
              <Text className="text-white text-xs pl-2">
                Phone: {item.phone}
              </Text>
              <View className="flex flex-row items-center">
                <Text className="text-[#DC8758] text-xs pl-2">Closed</Text>
                <Text className="text-white text-xs pl-2">
                  Opens {item.hours}, {item.days}
                </Text>
              </View>
              <View style={tw`flex-row items-center pl-1 pt-1`}>
                <View className="pl-1 flex flex-row">
                  <StarRatings rating={item.rating} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
export default DispensaryCard;
