import { StyleSheet, Text, View, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";

//Tailwind
import { TailwindProvider } from "tailwindcss-react-native";

//Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import "react-native-gesture-handler";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import Routes from "./routes/Routes";

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </TailwindProvider>
  );
}
