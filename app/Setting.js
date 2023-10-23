import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from "react-native";
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, SIZES, images} from '../constants'
import {ScreenHeaderBtn} from "../components";
import styles from "./donate.style"
import { useNavigation } from "expo-router";
import group from "../assets/images/SafeLink.jpg"

const SettingsPage = () => {
    const navigation = useNavigation();

    //Function to navigate to the 'Settings' screen
    const navigateToSettings = () => {
        navigation.navigate('Setting');
    }

    //Function to navigate to the 'login' screen
    const navigateToLogin = () => {
        navigation.navigate('Login')
    }

    //Function to show alert dialog and navigate to the 'login' screen
    const logout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'index'}],
                    });
                }},
            ]
        )
    }


    return (
        <View style = { {alignItems: 'center'} }>
            <TouchableOpacity onPress={logout} style = {styles.pressBtn}>
                <Text style = {styles.userName}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SettingsPage;