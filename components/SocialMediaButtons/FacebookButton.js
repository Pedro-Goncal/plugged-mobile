import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';

const styles = StyleSheet.create({
  facebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
    position: 'relative',
    marginBottom: 0,
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  textStyle: {
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
});

const FacebookButton = ({
  buttonViewStyle,
  onPress,
  logoStyle,
  textStyle,
  buttonText,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.facebookStyle, ...buttonViewStyle }}
      onPress={onPress}
    >
      <Image
        source={require('./images/facebook.png')}
        style={{ ...styles.imageIconStyle, ...logoStyle }}
      />
      <Text style={{ ...styles.textStyle, ...textStyle }}>
        {buttonText ? buttonText : 'Sign in with Facebook'}
      </Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;
