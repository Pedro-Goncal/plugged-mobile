import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';

//Styles
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';

//Components
import GoogleButton from '../components/SocialMediaButtons/GoogleButton';
import FacebookButton from '../components/SocialMediaButtons/FacebookButton';

//Assets
import Logo from '../assets/logo-no-background.png';
import loginBg from '../assets/backgrounds/login-bg.png';

const colorGreen = '#096A2E';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={loginBg}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <View className="flex-1 flex justify-end items-center pb-10">
          <View className="px-10 flex w-full">
            <View className="w-full flex justify-center items-center">
              <Image source={Logo} style={{ width: 200, height: 200 }} />
            </View>
            <View className="w-full mb-2">
              <Text style={{ color: '#31BE89' }} className="text-xl font-bold">
                Sing In
              </Text>
            </View>

            <View className="flex flex-row justify-center items-center">
              {/* <Icon name="envelope" size={20} color={'white'} /> */}
              <TextInput
                style={{ backgroundColor: '#333', color: '#FFF' }}
                className="w-full text-white bg-white rounded-lg py-4 px-5"
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
                className="w-5/6 rounded-lg py-4 px-2"
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
            <View className="flex flex-row justify-end mt-4">
              <TouchableOpacity>
                <Text style={[tw`text-white`]}>Recover Password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              className="mt-6 py-4 rounded-lg flex justify-center items-center"
              style={{ backgroundColor: colorGreen }}
            >
              <Text className="text-white text-lg">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center">
            <View>
              <Text className="text-white">Or Sign in with</Text>
            </View>
            {/* Social Media Icons */}
            <View className="mt-6">
              <GoogleButton />
              <FacebookButton buttonViewStyle={{ borderColor: 'none' }} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
