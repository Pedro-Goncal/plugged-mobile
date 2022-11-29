import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Stacks
import BottomTabs from "./BottomTabs/BottomTabs";

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
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
