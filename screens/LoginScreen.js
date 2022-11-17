import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';

//Reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';

//Styles
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Image as ImageSvg, Ellipse, ClipPath } from 'react-native-svg';

//Components
import GoogleButton from '../components/SocialMediaButtons/GoogleButton';
import FacebookButton from '../components/SocialMediaButtons/FacebookButton';

//Assets
import Logo from '../assets/logo-no-background.png';
import loginBg from '../assets/backgrounds/login-bg.png';

const colorGreen = '#169F80';
const colorGreenLight = '#008489';
const colorGreenLight2 = '#8acfbf';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.6, 0]
    ); //If the value in imagePosition is 1 it will return 0, if it it 0 it will return -heigh / 2.2
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolations = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 1000 }),
      transform: [
        { translateY: withTiming(interpolations, { duration: 1000 }) },
      ],
    };
  });

  const sloganAnimatedStyle = useAnimatedStyle(() => {
    const interpolations = interpolate(imagePosition.value, [0, 1], [-250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 1000 }),
      transform: [
        { translateX: withTiming(interpolations, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {
        duration: 800,
      }),
      transform: [
        { rotate: withTiming(interpolation + 'deg', { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };

  const closeHandler = () => {
    imagePosition.value = 1;
  };

  return (
    <Animated.View
      className="flex-1 justify-end "
      style={{ backgroundColor: colorGreen }}
    >
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height} width={width}>
          <View className="w-full flex justify-center items-center mt-5">
            <ClipPath id="clipPathId">
              <Ellipse cx={width / 2} rx={height} ry={height} />
            </ClipPath>
            <Image
              source={Logo}
              style={{ width: 200, height: 200 }}
              className="w-full text-center"
            />
          </View>
          <ImageSvg
            href={loginBg}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            className="opacity-80"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          className="h-8 w-8 justify-center self-center items-center rounded-full flex  "
          style={[
            { backgroundColor: colorGreenLight, top: -15 },
            closeButtonAnimatedStyle,
          ]}
        >
          <Icon name="times" size={18} color={'white'} onPress={closeHandler} />
        </Animated.View>
      </Animated.View>
      <View className="flex justify-center" style={styles.bottomContainer}>
        <Animated.View
          className="px-6 mb-6 font-bold"
          style={sloganAnimatedStyle}
        >
          <Text className="text-white text-3xl">
            Get plugged into dispensaries near you!
          </Text>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable
            className="mx-6 my-2 py-4 rounded-lg flex justify-center items-center"
            style={{ backgroundColor: colorGreen }}
            onPress={loginHandler}
          >
            <Text className="text-white text-lg">Login</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable
            className="mx-6 my-2 py-4 rounded-lg flex justify-center items-center bg-black"
            style={{ borderColor: colorGreen, borderWidth: 1 }}
            onPress={registerHandler}
          >
            <Text className="text-white text-lg">Sign up</Text>
          </Pressable>
        </Animated.View>

        {/* FORM */}

        <Animated.View style={[formAnimatedStyle, styles.formContainer]}>
          <View>
            <Text className="text-4xl font-bold mb-4">
              {isRegistering ? 'Sign Up' : 'Login'}
            </Text>
          </View>
          <View className="flex flex-row justify-center items-center">
            <TextInput
              style={{
                backgroundColor: '#333',
                color: '#FFF',
                zIndex: 1,
              }}
              className="w-full text-white bg-white rounded-lg py-3 px-5"
              placeholderTextColor="#fff"
              placeholder="Email"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            className="flex flex-row rounded-lg justify-center items-center mt-4"
            style={{ backgroundColor: '#333' }}
          >
            <TextInput
              style={{ backgroundColor: '#333', color: '#FFF' }}
              className="w-5/6 rounded-lg py-3 px-2"
              placeholderTextColor="#fff"
              secureTextEntry={passwordVisible}
              placeholder="Password"
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? 'eye-slash' : 'eye'}
                size={26}
                color={'grey'}
              />
            </TouchableOpacity>
          </View>
          {isRegistering && (
            <View className="flex flex-row justify-center items-center px-4 py-2">
              <Text className="mr-3 text-white">X</Text>
              <Text className="text-white">
                You must be 21+ years old to enter. By signing up, you agree you
                are of legal age?
              </Text>
            </View>
          )}
          <TouchableOpacity
            className=" mt-4 py-4 rounded-xl flex justify-center items-center"
            style={[{ backgroundColor: 'black' }]}
          >
            <Text className="text-lg" style={{ color: colorGreen }}>
              {isRegistering ? 'Continue' : 'Login'}
            </Text>
          </TouchableOpacity>
          <View>
            <Text className="text-center py-1">
              {isRegistering ? 'or Sign Up with' : 'or Login with'}
            </Text>
          </View>
          <View className="mt-1 flex flex-row justify-center items-center">
            <GoogleButton
              buttonViewStyle={{ width: 140 }}
              buttonText="Google"
            />
            <FacebookButton
              buttonViewStyle={{ borderColor: '#485a96', width: 145 }}
              buttonText="Facebook"
            />
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    height: height / 1.7,
  },
  formContainer: {
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
