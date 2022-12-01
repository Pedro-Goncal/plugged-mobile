import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { colors } from "../../config/StylesConfig";

const ProductCard = ({ product }) => {
  return (
    <TouchableOpacity style={styles.productCardContainer}>
      <Image style={styles.productImg} source={{ uri: product.imgUrl }} />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCardContainer: {
    width: "100%",
    margin: 10,
  },
  productImg: {
    width: 180,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
  },
  name: {
    color: "#FFF",
  },
});
