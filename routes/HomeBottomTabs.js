import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/LoginScreen";
import StrainsScreen from "../screens/StrainsScreen";

// Icons (Expo)
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// React Native
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#222222",
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",

          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={34}
              color={focused ? "green" : "#7A7A7A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Strains"
        component={StrainsScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cannabis"
              size={34}
              color={focused ? "green" : "#7A7A7A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={34}
              color={focused ? "green" : "#7A7A7A"}
            />
          ),
        }}
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
