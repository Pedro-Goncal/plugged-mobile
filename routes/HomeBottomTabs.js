import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import StrainsScreen from "../screens/StrainsScreen";

// Icons (Expo)
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// React Native
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

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
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
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
        name="Strains"
        component={StrainsScreen}
        options={{
          tabBarActiveTintColor: "green",
          title: "Purple Haze",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "white",
          },

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
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={34}
              color={focused ? "green" : "#7A7A7A"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={focused ? "green" : "#7A7A7A"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
