import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Stacks
import HomeBottomTabs from "./HomeBottomTabs";
import StrainsScreen from "../screens/StrainsScreen";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeBottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StrainsScreen"
          component={StrainsScreen}
          options={{
            title: "Purple Haze",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
            },

            headerBackTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
