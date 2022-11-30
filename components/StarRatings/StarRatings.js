import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { colors } from "../../config/StylesConfig";

const StarRatings = ({ rating }) => {
  return (
    <View>
      {rating < 2 ? (
        <Text style={styles.container}>
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color="white" />;
          <Entypo name="star" size={18} color="white" />;
          <Entypo name="star" size={18} color="white" />;
          <Entypo name="star" size={18} color="white" />;
        </Text>
      ) : rating < 3 ? (
        <Text style={styles.container}>
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color="white" />;
          <Entypo name="star" size={18} color="white" />;
          <Entypo name="star" size={18} color="white" />;
        </Text>
      ) : rating < 4 ? (
        <Text style={styles.container}>
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color="white" />;
          <Entypo name="star" size={18} color="white" />;
        </Text>
      ) : rating < 5 ? (
        <Text style={styles.container}>
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color="white" />;
        </Text>
      ) : (
        <Text style={styles.container}>
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
          <Entypo name="star" size={18} color={colors.orange} />
        </Text>
      )}
    </View>
  );
};

export default StarRatings;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
