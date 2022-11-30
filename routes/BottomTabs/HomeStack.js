import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import HomeScreen from "../../screens/HomeStackScreen/HomeScreen/HomeScreen";
import DispensaryScreen from "../../screens/HomeStackScreen/DispensaryScreen/DispensaryScreen";

//Styles
import { colors } from "../../config/StylesConfig";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DispensaryScreen"
        component={DispensaryScreen}
        options={{
          title: "Dispensary",
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
