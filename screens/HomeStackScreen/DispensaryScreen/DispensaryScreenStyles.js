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
    marginVertical: 10,
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
    padding: 20,
    width,
  },
  logoIconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  logoContainer: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
    width: 125,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  icon: {
    width: 45,
    height: 45,
    marginHorizontal: 8,
  },
  descriptionContainer: {
    height: 500,
    paddingTop: 15,
  },
  description: {
    color: "#FFF",
    Text: "justify",
  },
});

export default styles;
