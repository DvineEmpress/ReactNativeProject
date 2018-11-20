/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';

import bgImage from 'ReactNativeProj/images/bg1.jpg';
import logo from 'ReactNativeProj/images/logo.png';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
//type Props = {};

const { width: WIDTH } = Dimensions.get('window');

export default class Main extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>A To-Do App!</Text>


          <TextInput style={styles.input}
            placeholder={'Enter Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />


          <TextInput style={styles.input}
            placeholder={'Enter Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />

          <Button
            //onPress={onPressLearnMore}
            title='Login'
            color='#841584'
            accessibilityLabel="Login into the ToDo App and set your schedule"
          />
        </View>


      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 120
  },

  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },

  inputContainer: {
    marginTop: 65
  },

  input: {
    width: WIDTH - 55,
    height: 55,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 20,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
});
