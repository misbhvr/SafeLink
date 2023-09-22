import { View, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { COLORS, icons, SIZES, images } from '../constants';
import { Donationtabs, ScreenHeaderBtn, Welcome, images } from '../components'

import styles from '../components/common/cards/popular/donationscard.style'


const donation = ({item, text, url, selectedJob, handleCardPress}) => {
    const router = useRouter();
     

    return (
        <SafeAreaView style = { {flex:1, backgroundColor: COLORS.lightWhite} }>
            <Stack.Screen
                options = { {
                    headerStyle: { backgroundColor: COLORS.White },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension = "100%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension = "100%"/>
                    ),
                    headerTitle:''
                } }/>

                <>
                    <Donationtabs/>
                </>
        </SafeAreaView>
    )
}

export default donation;