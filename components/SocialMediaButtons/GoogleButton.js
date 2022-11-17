import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  googleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  imageIconStyle: {
    padding: 10,
    // marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  textStyle: {
    color: '#575757',
    marginLeft: 15,
    marginRight: 20,
  },
});

const GoogleButton = ({
  buttonViewStyle,
  onPress,
  logoStyle,
  textStyle,
  buttonText,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.googleStyle, ...buttonViewStyle }}
      onPress={onPress}
    >
      <Image
        source={require('./images/google.png')}
        style={{ ...styles.imageIconStyle, ...logoStyle }}
      />

      <Text style={{ ...styles.textStyle, ...textStyle }}>
        {buttonText ? buttonText : 'Sign up with Google'}
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
