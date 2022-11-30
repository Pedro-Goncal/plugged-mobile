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
import CannabisLearningVideosCard from "../components/CannabisLearningVideosCard";
import CannibasLearningCard from "../components/CannibasLearningCard";
import DeliveryNearbyCard from "../components/DeliveryNearbyCard";
import DispensaryCard from "../components/DispensaryCard";
import FilterOptionsCard from "../components/FilterOptionsCard";
import HighlightsCard from "../components/HighlightsCard";
import LocalNewsEventsCard from "../components/LocalNewsEventsCard";
import StrainsCard from "../components/StrainsCard";

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
            <DispensaryCard
              name="Plugged Dispensary"
              address="Fake Boulevard #69, Phoenix, AZ 85029"
              phone="420-420-6969"
              hours="9AM - 9PM"
              days="Sun-Sat"
              imgUrl="../assets/backgrounds/dispensary-bg.png"
              logoUrl="../assets/icons/dispensaryIcon.png"
            />
            {/* <DispensaryCard
              name="tur|med Dispensary"
              address="1613 N. 40th St. Phoenix, AZ 85008"
              phone="602-275-1279"
              hours="7AM - 10PM"
              days="Sun-Sat"
              imgUrl="https://lh3.googleusercontent.com/p/AF1QipMiT65WafDGrIk_atn4vtt1XRQZUxP44RoYMaF-=s1360-w1360-h1020"
              logoUrl="https://images.hytiva.com/TruMed-Logo-4-X3.jpg"
            />
            <DispensaryCard
              name="Harvest House of Cannabis"
              address="3828 S Vermeersch Rd Avondale, AZ 85323"
              phone="623-792-5032"
              hours="9AM - 8PM"
              days="Sun-Sat"
              imgUrl="https://imgix.cosmicjs.com/012705d0-d36e-11eb-9016-a7d86b9322db-harvest-of-recreational-phoenix-dispensary-near-me.jpg?fit=crop&crop=faces"
              logoUrl="https://images.dutchie.com/6995bb4d4c2b15b61a2f11b8aa2dace2"
            />
            <DispensaryCard
              name="Ponderosa Dispensary"
              address="9240 W Northern Ave #103B Glendale, AZ 85305"
              phone="623-877-3934"
              hours="8AM - 9PM"
              days="Sun-Sat"
              imgUrl="https://images.squarespace-cdn.com/content/v1/61f178924f65c90e40bc7372/625ce655-1f2b-47d1-856f-28e67dbff6b2/Ponderosa_Primary_Wordmark_with_Dispensary.png?format=1500w"
              logoUrl="https://tv.dopemagazine.com/wp-content/uploads/2018/11/ponderosa-releaf.jpg"
            />
            <DispensaryCard
              name="Sol Flower"
              address="22041 N 23rd Ave. Phoenix, AZ 85027"
              phone="602-390-1044"
              hours="9AM - 8PM"
              days="Sun-Sat"
              imgUrl="https://yourvalley.net/uploads/original/20210202-120044-Arizona%20Business%20(Sol%20Flower).jpg"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNC2qLLU1NOJ7WTAmQRG2c6-IsD-PQpyIdjzPcz2pZu6_YFzd1DFot_EZkIZWU3aHvxU&usqp=CAU"
            />
            <DispensaryCard
              name="The Mint Cannabis"
              address="17036 N Cave Creek Rd Phoenix, AZ 85032"
              phone="480-PHX-MINT"
              hours="8AM - 10PM"
              days="Sun-Sat"
              imgUrl="https://mintdeals.com/wp-content/uploads/2022/07/phoenix-building-v2-600x600-1.jpg"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsRevnIkvoxElUFtUgIgNVBWeGZwHi6ByyA&usqp=CAU"
            /> */}
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
