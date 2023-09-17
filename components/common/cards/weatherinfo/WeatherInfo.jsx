import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import React from 'react';
import styles from './weatherinfo.style';

const WeatherInfo = ({weatherData, weatherIcon}) => {
    if(!weatherData || !weatherData.location || !weatherData.current){
        console.log('Data is missing or incomplete');
        return null;
    }

    const{
        location: {name},
        current: {temp_c, humidity, condition },
    } = weatherData;

    const { icon } = condition;

    console.log('After data extraction:');
    console.log('name:', name);
    console.log('temp_c:', temp_c);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                {icon && (
                    <Image
                        style={styles.weatherIcon}
                        source={{uri: `https:${icon}`}}
                    />
                )}
                <Text style={styles.standardText}>{name}</Text>
            </View>

            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Feels like: {temp_c} °C</Text>
                    <Text style={styles.infoText}>Humidity: {humidity}%</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WeatherInfo;