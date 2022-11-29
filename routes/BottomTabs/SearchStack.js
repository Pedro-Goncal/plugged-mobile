import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import SearchScreen from '../../screens/SearchStackScreens/SearchScreen/SearchScreen';

const Stack = createStackNavigator();

const SearchStack = ()=> {
    return (
      <Stack.Navigator>
        <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
        />
  
      
      </Stack.Navigator>
    )
  }

  export default SearchStack