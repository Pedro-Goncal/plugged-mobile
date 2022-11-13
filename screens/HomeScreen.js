import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";

import tw from "tailwind-react-native-classnames";
import CannabisLearningVideosCard from "../components/CannabisLearningVideosCard";
import DeliveryNearbyCard from "../components/DeliveryNearbyCard";
import DispensaryCard from "../components/DispensaryCard";
import LocalNewsEventsCard from "../components/LocalNewsEventsCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 flex bg-black`}>
      <ScrollView>
        <View style={tw`bg-black`}>
          <Text style={tw`text-green-500 text-2xl pt-20 font-bold pl-5`}>
            Dispensaries Nearby
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
          >
            <DispensaryCard />
            <DispensaryCard />
            <DispensaryCard />
            <DispensaryCard />
            <DispensaryCard />
            <DispensaryCard />
          </ScrollView>
        </View>

        <View style={tw`bg-black`}>
          <Text style={tw`text-green-500 text-2xl pt-10 font-bold pl-5`}>
            Delivery Nearby
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
          >
            <DeliveryNearbyCard />
            <DeliveryNearbyCard />
            <DeliveryNearbyCard />
            <DeliveryNearbyCard />
            <DeliveryNearbyCard />
            <DeliveryNearbyCard />
          </ScrollView>
        </View>

        <View style={tw`bg-black`}>
          <Text style={tw`text-green-500 text-2xl pt-10 font-bold pl-5`}>
            Cannabis Learning Videos
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
          >
            <CannabisLearningVideosCard />
            <CannabisLearningVideosCard />
            <CannabisLearningVideosCard />
            <CannabisLearningVideosCard />
            <CannabisLearningVideosCard />
            <CannabisLearningVideosCard />
          </ScrollView>
        </View>
        <View style={tw`bg-black`}>
          <Text style={tw`text-green-500 text-2xl pt-10 font-bold pl-5 `}>
            Local News and Events
          </Text>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingTop: 10,
            }}
            horizontal
            style={tw`pb-10`}
          >
            <LocalNewsEventsCard />
            <LocalNewsEventsCard />
            <LocalNewsEventsCard />
            <LocalNewsEventsCard />
            <LocalNewsEventsCard />
            <LocalNewsEventsCard />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
