import { View, Text, TextInput } from "react-native";
import React from "react";

// Styles
import styles from "./SearchScreenStyles";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>
        This page is currently under construction
      </Text>
      <Text style={styles.stayTunedText}>Stay Tuned for upcoming changes!</Text>
    </View>
  );
};

export default SearchScreen;
