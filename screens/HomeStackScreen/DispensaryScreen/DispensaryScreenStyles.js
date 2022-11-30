import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../config/StylesConfig";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: colors.black,
    flex: 1,
  },
  dispensaryImageContainer: {
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#fff",
  },
  dispensaryImage: {
    width: width,
    height: 200,
    resizeMode: "cover",
  },
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    width,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: width,
  },
  logoContainer: {
    width: "37%",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
  },
  nameIconContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
  },
  name: {
    color: colors.orange,
    fontSize: 25,
    fontWeight: "bold",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  icon: {
    width: 45,
    height: 45,
    marginHorizontal: 4,
  },
  descriptionContainer: {
    marginTop: 15,
  },
  description: {
    color: "#FFF",
    text: "justify",
  },
  infoContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  mapContainer: {
    width: "35%",
  },
  map: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
  },
  infoTextContainer: {
    width: "65%",
    paddingLeft: 5,
  },
  infoSmallContainer: {
    marginBottom: 5,
  },
  ratingText: { color: colors.orange },
  textWhite: { fontSize: 12, color: colors.white },
  textOrange: { fontSize: 12, color: colors.orange },
  textGreen: { fontSize: 12, color: colors.green },
  productsContainer: {
    marginTop: 20,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
