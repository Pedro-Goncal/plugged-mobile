import React from 'react';
import { View, Text } from 'react-native';

import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 flex justify-center items-center`}>
      <Text style={tw`text-red-600`}> Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
