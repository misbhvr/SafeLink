import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import axios from 'axios';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import styles from './currentdisastercard.style'
import WeatherInfo from '../weatherinfo/WeatherInfo'
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants"

const API_KEYS = {
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token_key:'YOUR_ACCESS_TOKEN',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET',
}

const CurrentDisasterCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchTwitterData = async () => {
        const options = {
            method: 'GET',
            url: 'https://api.twitter.com/1.1/search/tweets.json',
            params: {q: 'disaster OR emergency OR crisis OR hazard OR Auckland OR Wellington OR Christchurch', geocode: '-40.900557,174.885971,3000km', count: '3'},
            auth: {
                consumer_key: API_KEYS.consumer_key,
                consumer_secret: API_KEYS.consumer_secret,
                token: API_KEYS.access_token_key,
                token_secret: API_KEYS.access_token_secret
            }
        };

        try {
            const response = await axios.request(options);
            if(response.status === 200){
                const { statuses } = response.data;
                if (statuses && statuses.length >= 3) {
                    setTwitterData(statuses);
                }
            }
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
        fetchTwitterData('Auckland');
    }, []);

    if(!loaded){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white"/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Current Disaster</Text>
            </View>
            <WeatherInfo twitterData = {twitterData}/>
        </View>
    )
}



export default CurrentDisasterCard;