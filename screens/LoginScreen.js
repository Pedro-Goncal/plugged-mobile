import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

//Styles
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';

//Components
import GoogleButton from '../components/SocialMediaButtons/GoogleButton';
import FacebookButton from '../components/SocialMediaButtons/FacebookButton';

//Assets
import Logo from '../assets/logo-no-background.png';

const colorGreen = '#096A2E';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View
        style={[
          tw`flex-1 flex justify-end items-center pb-10`,
          { backgroundColor: '#111' },
        ]}
      >
        <View style={[tw`p-10 flex w-full`]}>
          <View style={[tw`w-full flex justify-center items-center mb-8`]}>
            <Image source={Logo} style={[tw``, { width: 200, height: 100 }]} />
          </View>
          <View style={[tw`w-full mb-2`]}>
            <Text style={[tw`text-xl font-bold`, { color: '#31BE89' }]}>
              Sing In
            </Text>
          </View>

          <View style={tw`flex flex-row justify-center items-center`}>
            {/* <Icon name="envelope" size={20} color={'white'} /> */}
            <TextInput
              style={[
                tw`w-full text-white bg-white rounded-lg py-4 px-5`,
                { backgroundColor: '#333', color: '#FFF' },
              ]}
              placeholderTextColor="#fff"
              placeholder="Email"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            style={[
              tw` flex flex-row rounded-lg justify-center items-center mt-4`,
              { backgroundColor: '#333' },
            ]}
          >
            <TextInput
              style={[
                tw` w-5/6 rounded-lg py-4 px-2`,
                { backgroundColor: '#333', color: '#FFF' },
              ]}
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
          <View style={[tw`flex flex-row justify-end mt-4`]}>
            <TouchableOpacity>
              <Text style={[tw`text-white`]}>Recover Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              tw`mt-6 py-4 rounded-lg flex justify-center items-center`,
              { backgroundColor: colorGreen },
            ]}
          >
            <Text style={[tw`text-white text-lg`]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={[tw`flex justify-center items-center`]}>
          <View>
            <Text style={[tw`text-white`]}>Or Sign in with</Text>
          </View>
          {/* Social Media Icons */}
          <View style={[tw`mt-6`]}>
            <GoogleButton />
            <FacebookButton buttonViewStyle={{ borderColor: 'none' }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
