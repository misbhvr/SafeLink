import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import React from 'react';
import styles from './weatherinfo.style';

const WeatherInfo = ( {twitterData} ) => {
    if (!twitterData || twitterData.length !== 3) {
        console.log('Data is missing or incomplete');
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            {twitterData.map(tweet => (
                <View key = {tweet.id_str}>
                    <Text>{tweet.text}</Text>
                </View>
            ))}
        </SafeAreaView>
    )
}

export default WeatherInfo;