import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Stacks
<<<<<<< HEAD
import HomeBottomTabs from "./HomeBottomTabs";
import StrainsScreen from "../screens/StrainsScreen";
=======
import BottomTabs from "./BottomTabs/BottomTabs";
>>>>>>> main

const Stack = createStackNavigator();

/**
 To add stacks inside the Home Bottom tabs 
 */

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
<<<<<<< HEAD
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
=======
     
>>>>>>> main
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
