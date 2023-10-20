import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator, Linking, Image, SafeAreaView, ScrollView} from "react-native";
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, SIZES, images} from '../constants'
import {ScreenHeaderBtn} from "../components";
import styles from "./donate.style"
import { useNavigation } from "expo-router";

const DonationsPage = () =>
{
    const router = useRouter();
    const isLoading = false;
    const error = false;
    const navigation = useNavigation();

    //Navigate to Donate Page
    const navigateToDonate = () => {
        navigation.navigate('Donate');
    }

    //Open donation link
    const openDonationLink = (url) =>
    {
        if(url)
        {
            Linking.openURL(url)
                .catch(error => console.error("Sorry there was an error", error));
        }
    }

    //Sample data
    const data = [
        {id: 1, text: 'Libya Flood Emergency', url: 'https://www.unicef.org.nz/appeals/libya-flood-emergency'},
        {id: 2, text: 'Global Malnutrition Crisis', url: 'https://www.unicef.org.nz/appeals/the-greatest-need'},
        {id: 3, text: 'Moroccan Earthquake', url: 'https://www.unicef.org.nz/appeals/global-malnutrition-crisis'},
    ];

    //Donation Card component
    const DonationCard = ({url, text}) => (
        <TouchableOpacity
            style = { {flex: 1, margin: 10} }
            onPress = {() => openDonationLink(url)}>
            <View style = {[styles.donationCard, {backgroundColor: COLORS.lightWhite}]}>
                <TouchableOpacity
                    style = {styles.logoContainer}
                    onPress = {() => openDonationLink(url)}>
                    <Image
                        source = {images.unicef}
                        resizeMode = "contain"
                        style = {styles.logoImage}/>
                </TouchableOpacity>
                <View style = {styles.textContainer}>
                    <Text style = {styles.companyName} numberOfLines = {1}>
                        Unicef
                    </Text>
                    <Text style = {styles.jobName} numberOfLines = {1}>
                        {text}
                    </Text>
                    <Text style = {styles.jobType}>
                        learn more
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    //render donation cards
    const renderItem = ({item}) => (
        <View style = { {flex: 1/3} }>
            <DonationCard {...item} />
        </View>
    )

    //Main UI
    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options = {{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,

                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl = {icons.left}
                            dimension = {"100%"}
                            onPress = {() => navigation.goBack()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl = {icons.share}
                            dimension = {"100%"}/>
                    ),
                    headerTitle: ''
                }} />

            <View style = { { flex: 1, paddingHorizontal: 10 } }>
                <Text style = {styles.headerTitle}>
                    Feel free to donate here
                </Text>

                <FlatList
                    data = {data}
                    renderItem = {renderItem}
                    keyExtractor = { (item) => item.id.toString() }
                    contentContainerStyle={ { width: '100', paddingHorizontal: 10 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default DonationsPage;
