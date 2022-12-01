import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../config/StylesConfig";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  searchText: {
    color: colors.green,
    fontWeight: "bold",
  },
  stayTunedText: {
    color: colors.white,
    paddingTop: 20,
  },
});

export default styles;
