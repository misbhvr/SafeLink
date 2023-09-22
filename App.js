import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from 'react';


//import Navigation from "./src/Navigation/index.js";
import SignUpScreen from "./src/SignUp/SignUpScreen";
import SignInScreen from "./src/LogIn/SignInScreen";

import {
  SafeAreaView,
  Text,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Button from './components/Button'; 
import { ScrollView } from "react-native-web";
//import ImageViewer from './components/ImageViewer';



const App = () => {
  return (
    
    <SafeAreaView style={styles.root}>
      
      <View style={styles.container}>
       {/* <Navigation/> */}
        <SignInScreen />
        <SignUpScreen />
        
      </View>
      <StatusBar style="auto" />
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  root : {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;