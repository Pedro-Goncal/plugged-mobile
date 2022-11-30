import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import LoginScreen from '../../screens/ProfileStackScreens/LoginScreen/LoginScreen';


const Stack = createStackNavigator();



const ProfileStack = ()=> {
    return(
      <Stack.Navigator>
        <Stack.Screen 
            name="ProfileScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
        />
  
     
      </Stack.Navigator>
    )
  }

  export default ProfileStack