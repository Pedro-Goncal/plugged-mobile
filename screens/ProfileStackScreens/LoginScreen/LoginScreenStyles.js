import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../config/StylesConfig";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: "flex-end",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    textAlign: "center",
    width: 200,
    height: 200,
  },
  closeButtonContainer: {
    backgroundColor: colors.lightGreen,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    alignItems: "center",
    borderRadius: 20,
    top: -20,
  },
  bottomContainer: {
    height: height / 2,
    display: "flex",
    justifyContent: "center",
  },
  sloganContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sloganText: {
    fontSize: 30,
    color: colors.textColor,
    textShadowColor: "rgba(0, 0, 0, 0.90)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  btnContainer: {},
  mainBtn: {
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  loginBtn: {
    backgroundColor: colors.green,
  },
  registerBtn: {
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.green,
  },
  btnText: {
    color: colors.textColor,
    fontWeight: "500",
    fontSize: 16,
  },
  formContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default styles;
