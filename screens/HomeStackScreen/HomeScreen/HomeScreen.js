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
  return (
    <SafeAreaView style={tw`flex-1 flex bg-black`}>
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
            <DispensaryCard />
            <DispensaryCard />
            <DispensaryCard />
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