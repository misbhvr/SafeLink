import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator, Linking, Image, SafeAreaView, ScrollView} from "react-native";
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, SIZES, images} from '../constants'
import {ScreenHeaderBtn} from "../components";
import styles from "./donate.style"
import { useNavigation } from "expo-router";
import food from "../assets/images/GlobalFood.jpg"
import flood from "../assets/images/LibyaFlood.jpg"
import moroccan from "../assets/images/Moroccan.jpg"
import Icon from 'react-native-vector-icons/Ionicons';



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
        {
            id: 1,
            text: 'Libya Flood Emergency',
            url: 'https://www.unicef.org.nz/appeals/libya-flood-emergency',
            description: 'Help provide emergency supplies to families affected by flooding in Libya',
            images: flood,
        },
        {
            id: 2,
            text: 'Global Malnutrition Crisis',
            url: 'https://www.unicef.org.nz/appeals/the-greatest-need',
            description: 'Support Unicef\'s efforts to treat and prevent malnutrition around the world',
            images: food,
        },
        {
            id: 3,
            text: 'Moroccan Earthquake',
            url: 'https://www.unicef.org.nz/appeals/global-malnutrition-crisis',
            description: 'Bring relief to children impacted by the recent earthquake in Morocco',
            images: moroccan,
        },
    ];

    //Donation Card component
    const DonationCard = ({url, text, description, images}) => (
        <TouchableOpacity
            style = { {flex: 1, margin: 10} }
            onPress = {() => openDonationLink(url)}>
            <View style = {[styles.donationCard, {backgroundColor: COLORS.babyBlue, alignItems: 'center'}]}>
                <Text style={styles.headerTitle}>
                    {text}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Image
                        source = {images}
                        resizeMode = "contain"
                        style = { {...styles.logoImage, borderRadius: 5, width: 100, height: 100} }
                    />
                    <View style = {{flex: 1, marginLeft: 10}}>
                        <Text style = {styles.descriptionText}>
                            {description}
                        </Text>
                        <Text style = {styles.descriptionText}>
                            learn more
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )



    //render donation cards
    const renderItem = ({item}) => (
        <View style = { {flex: 1, margin: 5} }>
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
                        <Icon
                            name="ios-arrow-back"
                            size={25}
                            color="black"
                            onPress={() => navigation.goBack()}
                        />
                    ),
                    headerTitle: ''
                }} />

            <View style = { { flex: 1, paddingHorizontal: 10 } }>
                <View style={styles.headerTitleContainer}>
                    <Text style = {styles.headerTitle}>Feel free to donate here</Text>
                </View>

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
