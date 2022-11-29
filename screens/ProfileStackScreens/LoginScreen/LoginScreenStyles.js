import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../config/StylesConfig";


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green
    },
    bottomContainer: {
      height: height / 1.7,
    },
    formContainer: {
      ...StyleSheet.absoluteFill,
      zIndex: -1,
      justifyContent: "center",
      paddingHorizontal: 20,
    },
  });

export default styles