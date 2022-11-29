import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

//Styles
import styles from "./DispensaryScreenStyles";
import FilterOptionsCard from "../../../components/FilterOptionsCard";

const { width, height } = Dimensions.get("window");

const DispensaryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dispensaryImageContainer}>
        <Image
          style={styles.dispensaryImage}
          source={require("../../../assets/backgrounds/dispensaryTemp.jpg")}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.logoIconsContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/logo-no-background.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.iconsContainer}>
            <View>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/Location.png")}
              />
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/Deliveries.png")}
              />
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/DriveThru.png")}
              />
            </View>
            <View>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/24hrs.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat, risus pulvinar aliquet ipsum dolor sit amet, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec placerat, risus
            pulvinar aliquet ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec placerat, risus pulvinar aliquet
            ipsum dolor sit amet,
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DispensaryScreen;
