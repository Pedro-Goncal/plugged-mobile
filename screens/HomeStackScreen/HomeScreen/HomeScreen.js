import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import tw from "tailwind-react-native-classnames";
import CannabisLearningVideosCard from "../../../components/CannabisLearningVideosCard";
import CannibasLearningCard from "../../../components/CannibasLearningCard";
import DeliveryNearbyCard from "../../../components/DeliveryNearbyCard";
import DispensaryCard from "../../../components/DispensaryCard";
import FilterOptionsCard from "../../../components/FilterOptionsCard";
import HighlightsCard from "../../../components/HighlightsCard";
import LocalNewsEventsCard from "../../../components/LocalNewsEventsCard";
import StrainsCard from "../../../components/StrainsCard";

// Assets

const HomeScreen = () => {
  const navigation = useNavigation();

  // TODO - MIKE - Se note on Dispensery card

  return (
    <SafeAreaView style={tw`flex-1 flex bg-black pt-10`}>
      <ScrollView className="bg-black">
        <View style={tw`bg-black`}>
          <Text style={tw`text-white text-2xl pt-3 font-bold pl-6`}>
            Dispensaries
          </Text>
          <Text style={tw`text-white text-base pt-5 font-bold pl-6`}>
            Search By
          </Text>
          <FilterOptionsCard />

          <ScrollView className="pt-8 pl-6" horizontal>
            {/* We should have the flash list here and the dispensery card be each own card indevidual, and pass the info through props, same with the strains and educational cards */}
            <DispensaryCard />
          </ScrollView>
        </View>

        <View style={tw`bg-black`}>
          <Text style={tw`text-white text-2xl pt-10 font-bold pl-5`}>
            Strain of the Month
          </Text>

          <View>
            <StrainsCard />
          </View>
        </View>

        <View style={tw`bg-black`}>
          <Text style={tw`text-white text-2xl pt-10 font-bold pl-5`}>
            Cannabis Learning
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
          >
            <CannibasLearningCard />
            <CannibasLearningCard />
            <CannibasLearningCard />
          </ScrollView>
        </View>
        <View style={tw`bg-black pr-24`}>
          <Text style={tw`text-white text-2xl pt-10 font-bold pl-5 `}>
            Highlights - News & Events
          </Text>
          <ScrollView className=" pt-6 pl-6 ">
            <HighlightsCard />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
