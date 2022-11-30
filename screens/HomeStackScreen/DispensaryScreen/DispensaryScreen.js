import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";

//Styles
import styles from "./DispensaryScreenStyles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../config/StylesConfig";

//Redux
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import StarRatings from "../../../components/StarRatings/StarRatings";
import { TouchableHighlight } from "react-native-gesture-handler";

import { FlashList } from "@shopify/flash-list";

const { width, height } = Dimensions.get("window");

/*
 TODO -  Conditionaly render icons based on dispensary
 */

const DispensaryScreen = () => {
  const { selectedDispensery } = useSelector((state) => state.dispenseries);
  console.log(selectedDispensery);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "" });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dispensaryImageContainer}>
        <Image
          style={styles.dispensaryImage}
          source={{ uri: selectedDispensery.imgUrl }}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: selectedDispensery.logoUrl }}
              style={styles.logo}
            />
          </View>
          <View style={styles.nameIconContainer}>
            <View>
              <Text style={styles.name}>{selectedDispensery.name}</Text>
            </View>
            <View style={styles.iconsContainer}>
              {selectedDispensery.delivers && (
                <View>
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/Deliveries.png")}
                  />
                </View>
              )}
              {selectedDispensery.driveThru && (
                <View>
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/DriveThru.png")}
                  />
                </View>
              )}
              {selectedDispensery.twentyFour && (
                <View>
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/24hrs.png")}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {selectedDispensery.description}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <View style={styles.infoSmallContainer}>
              <Text style={styles.ratingText}>Rate Us! </Text>
              <Text>
                <StarRatings rating={selectedDispensery.rating} />
              </Text>
            </View>
            <View style={styles.infoSmallContainer}>
              <Text style={styles.textWhite}>{selectedDispensery.address}</Text>
            </View>
            <View style={styles.infoSmallContainer}>
              <Text style={styles.textOrange}>{selectedDispensery.phone}</Text>
            </View>
            <View style={styles.infoSmallContainer}>
              <Text style={styles.textWhite}>Open: </Text>
              <Text style={styles.textGreen}>
                {selectedDispensery.hours} {selectedDispensery.days}
              </Text>
            </View>
          </View>
          <View style={styles.mapContainer}>
            <Image
              style={styles.map}
              source={require("../../../assets/temp/googleMaps.png")}
            />
          </View>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.productHeader}>
            <Text style={[styles.textWhite, { fontSize: 20 }]}>
              Featured Products
            </Text>
            <TouchableOpacity>
              <Text style={styles.textGreen}>See All</Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* <FlashList
      data={dispensaries}
      horizontal
      initialNumToRender={3}
      // keyExtractor={(item) => item.id.toString()}
      estimatedItemSize={5}
      renderItem={({ item }) => (
        <View>
          <Text>Suuup</Text>
        </View>
      )}
    /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DispensaryScreen;
