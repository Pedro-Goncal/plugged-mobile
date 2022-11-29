import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Stacks
import HomeStack from './HomeStack';
import StrainStack from './StrainStack';
import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';


// Icons (Expo)
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


/*
Each stack file on this folder represent one of the menu items in the bottom tab
Each will have its onw children screens
To add screens that are pushed from on specific stack add them to their respective stack files
*/

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#222222',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',

          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={34}
              color={focused ? 'green' : '#7A7A7A'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Strains"
        component={StrainStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cannabis"
              size={34}
              color={focused ? 'green' : '#7A7A7A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={34}
              color={focused ? 'green' : '#7A7A7A'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={focused ? 'green' : '#7A7A7A'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
