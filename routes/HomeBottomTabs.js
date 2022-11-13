import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
