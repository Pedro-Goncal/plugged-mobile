import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import StrainsScreen from "../../screens/StrainStackScreens/StrainScreen/StrainsScreen";

const Stack = createStackNavigator();

const StrainStack = () => {
  return (
    <Stack.Navigator>
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
  );
};

export default StrainStack;
