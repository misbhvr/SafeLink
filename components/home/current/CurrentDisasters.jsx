import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';


import { COLORS, SIZES } from '../../../constants';
import styles from './currentdisasters.style'
import CurrentDisasterCard from '../../common/cards/disaster/CurrentDisasterCard';

const CurrentDisasters = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Current Weather</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={[1,2,3]}
                        renderItem={({item}) => (
                            <CurrentDisasterCard item={item}/>
                        )}
                        keyExtractor={item => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium}}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default CurrentDisasters