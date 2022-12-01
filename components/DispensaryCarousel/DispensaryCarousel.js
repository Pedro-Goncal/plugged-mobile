import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Components
import DispensaryCard from "../DispensaryCard";

//Temp Utils Object
import { dispensaries } from "../../utils/utilObjects";

//FlashList
import { FlashList } from "@shopify/flash-list";

const DispensaryCarousel = () => {
  return (
    <View>
      <FlashList
        data={dispensaries}
        horizontal
        initialNumToRender={3}
        // keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={5}
        renderItem={({ item }) => <DispensaryCard dispensary={item} />}
      />
    </View>
  );
};

export default DispensaryCarousel;

const styles = StyleSheet.create({});
