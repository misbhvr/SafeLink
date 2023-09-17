import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import axios from 'axios';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import styles from './currentdisastercard.style'
import WeatherInfo from '../weatherinfo/WeatherInfo'
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants"

const API_KEYS = '331b6e8678msh3b731d62673ee04p1f210bjsnb5751ec11821'

const CurrentDisasterCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchWeatherData = async (cityName) => {
        const options = {
            method: 'GET',
            url: `https://weatherapi-com.p.rapidapi.com/forecast.json`,
            params: {q: cityName, days: '3'},
            headers: {
                'X-RapidAPI-Key': API_KEYS,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            await waitBeforeRequest(1000);
            const response = await axios.request(options);
            if(response.status === 200){
                setWeatherData(response.data);
            }
            else{
                setWeatherData(null)
            }
            setLoaded(true)
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }

    const waitBeforeRequest = (milliseconds) => {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    }

    useEffect(() => {
        fetchWeatherData('Auckland');
    }, []);

    if(!loaded){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white"/>
            </View>
        )
    }

    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const nextDay1Index = (currentDayIndex + 1) % 7;
    const nextDay2Index = (currentDayIndex + 2) % 7;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    {dayNames[currentDayIndex]}
                </Text>
            </View>
            <WeatherInfo weatherData={weatherData}/>
        </View>
    )
}



export default CurrentDisasterCard;