import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import React from 'react';
import styles from './weatherinfo.style';

const WeatherInfo = ({ weatherData, weatherIcon }) => {
    if (!weatherData || weatherData.length !== 3) {
        console.log('Data is missing or incomplete');
        return null;
    }

    const {
        condition,
    } = weatherData[0].day;

    const { icon } = condition;

    const dayNames = ['Monday', 'Tuesday', 'Wednesday'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {weatherData.map((dayData, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>{dayNames[index]}</Text>
                        {icon && (
                            <Image
                                style={styles.weatherIcon}
                                source={{uri: `https:${icon}`}}
                            />
                        )}
                        <View style={styles.extraInfo}>
                            <View style={styles.info}>
                                <Text style={styles.infoText}>Max Temp: {dayData.day.maxtemp_c} °C</Text>
                                <Text style={styles.infoText}>Min Temp: {dayData.day.mintemp_c} °C</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

export default WeatherInfo;