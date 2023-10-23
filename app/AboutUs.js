import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator, Linking, Image, SafeAreaView, ScrollView} from "react-native";
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, SIZES, images} from '../constants'
import {ScreenHeaderBtn} from "../components";
import styles from "./donate.style"
import { useNavigation } from "expo-router";
import group from "../assets/images/SafeLink.jpg"

const AboutUsPage = () => {
    const navigation = useNavigation();

    //Function to navigate to the 'AboutUs' page
    const navigateToAboutUs = () => {
        navigation.navigate('AboutUs')
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>SafeLink</Text>
            <Text style={{fontSize: 16, textAlign: 'center', marginTop: 10, marginBottom: 60}}>
                SafeLink is a mobile application built to provide disaster relief and connect those in need with local aid organizations. The app provides real-time updates on disasters happening nearby and allows users to donate to vetted aid organizations responding to crises. SafeLink aims to get help to those who need it quickly and efficiently.
            </Text>
            <Image source={group} style = {{width: 300, height: 300}}/>
        </View>
    );
}

export default AboutUsPage;