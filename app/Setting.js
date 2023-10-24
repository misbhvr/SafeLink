import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from "react-native";
import styles from "./donate.style"
import { useNavigation } from "expo-router";

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

    //Function to show alert dialog and navigate to the home screen
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

    //Function to show alert dialog and navigate to the edit username screen
    const editName = () => {
        Alert.alert(
            'Edit Username',
            'Are you sure you?',
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

    //Function to show alert dialog and navigate to the edit password screen
    const editPassword = () => {
        Alert.alert(
            'Edit Password',
            'Are you sure you?',
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
            <TouchableOpacity onPress={editName} style = {styles.pressBtn}>
            <Text style={styles.userName}>Edit Username</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={editPassword} style = {styles.pressBtn}>
                <Text style={styles.userName}>Edit Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={logout} style = {styles.pressBtn}>
                <Text style = {styles.userName}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SettingsPage;