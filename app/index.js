import {View, Text, ScrollView, SafeAreaView, Image, Alert, Modal, TouchableOpacity, Button} from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { CurrentDisasters, ScreenHeaderBtn, Welcome } from '../components';
import UserMap from "../components/home/usermap/UserMap";
import SafeLink from '../assets/icons/logo.png';
import aboutUs from '../assets/images/AboutUs.png'
import close from '../assets/images/Close.png'
import settings from '../assets/images/Settings.png'
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';
import TwitterFeed from "../components/home/twitterfeed/TwitterFeed";
import DonationsPage from "./Donate";
import FullMap from "./FullMap";


const App = () => {
    const router = useRouter();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Donate" component={DonationsPage}/>
            <Stack.Screen name="FullMap" component={FullMap}/>
        </Stack.Navigator>
    );
};

const Home = () => {
    const navigation = useNavigation();

    const navigateToAboutUs = () => {
        navigation.navigate('AboutUs')
    }

    const navigateToSettings = () => {
        navigation.navigate('Setting');
    }

    //State variable and function to toggle the visibility of the menu modal
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Modal
                visible={showMenu}
                animationType="fade"
                transparent={true}
                onRequestClose={toggleMenu}
            >
                <View style={{ position: 'absolute', top: 50, left: 0, backgroundColor: COLORS.lightWhite, padding: 20, borderRadius: 10, borderColor: 'grey' }}>

                    <View style = {{marginBottom: 20}}>
                        <TouchableOpacity onPress={toggleMenu} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={close} style={{width: 18, height: 18, marginRight: 10}} />
                            <Text style={{fontSize: 18}}>Close</Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {{marginBottom: 20}}>
                        <TouchableOpacity onPress={navigateToSettings} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={settings} style={{width: 18, height: 18, marginRight: 10}} />
                            <Text style={{fontSize: 18}}>Settings</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={navigateToAboutUs} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={aboutUs} style={{width: 18, height: 18, marginRight: 10}} />
                        <Text style={{fontSize: 18}}>About Us</Text>
                    </TouchableOpacity>

                </View>
            </Modal>

            <Stack.Screen options = {{ headerStyle : { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl = {icons.menu}
                        dimension = "60%"
                        onPress = {toggleMenu}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl = {images.profile}
                        dimension = "100%"
                        onPress = {() => router.push('/Login')}
                    />
                ),
                headerTitle: () => (
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={SafeLink}
                            style={{ width: 65, height: 40, resizeMode: 'contain'}}
                        />
                    </View>
                ),
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                    <CurrentDisasters/>
                    <TwitterFeed/>
                    <UserMap/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;
