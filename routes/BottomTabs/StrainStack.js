import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import StrainsScreen from '../../screens/StrainStackScreens/StrainScreen/StrainsScreen';

const Stack = createStackNavigator();

const StrainStack = ()=> {
    return (
      <Stack.Navigator>
        <Stack.Screen
         name="StrainScreen"
         component={StrainsScreen}
         options={{
           headerShown: false,
         }}
        />
  
      </Stack.Navigator>
    )
  }

export default StrainStack