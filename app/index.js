import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    Alert,
    Modal,
    TouchableOpacity,
    Button,
    Settings
} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { CurrentDisasters, ScreenHeaderBtn, Welcome } from '../components';
import UserMap from "../components/home/usermap/UserMap";
import SafeLink from '../assets/icons/logo.png';
import close from '../assets/images/Close.png'
import settings from '../assets/images/Settings.png'
import aboutUs from '../assets/images/AboutUs.png'
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';
import LoginScreen from './Login'


const App = () => {
    const router = useRouter();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text>Go back</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    );
};

const Home = () => {
    const navigation = useNavigation();

    //Function to navigate to the 'Donate' screen
    const navigateToDonate = () => {
        if (activeMenuType === 'Donations')
        {
            navigation.navigate('Donate')
        }
    }

    //Function to navigate to the 'AboutUs' page
    const navigateToAboutUs = () => {
        navigation.navigate('AboutUs')
    }

    //Function to navigate to the 'Settings' screen
    const navigateToSettings = () => {
        navigation.navigate('Setting');
    }

    //State variable and function to toggle the visibility of the menu modal
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    //Modal to display the menu and the main screen
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Modal
                visible={showMenu}
                animationType="fade"
                transparent={true}
                onRequestClose={toggleMenu}
            >
                <View style={{ position: 'absolute', top: 60, left: 0, backgroundColor: 'white', padding: 30, borderRadius: 10 }}>

                    <View style = {{marginBottom: 20}}>
                        <TouchableOpacity onPress={toggleMenu} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={close} style={{width: 24, height: 24, marginRight: 40}} />
                            <Text style={{fontSize: 18}}>Close</Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {{marginBottom: 20}}>
                        <TouchableOpacity onPress={navigateToSettings} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={settings} style={{width: 24, height: 24, marginRight: 40}} />
                            <Text style={{fontSize: 18}}>Settings</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={navigateToAboutUs} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={aboutUs} style={{width: 24, height: 24, marginRight: 40}} />
                        <Text style={{fontSize: 18}}>About Us</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.menu}
                        dimension="60%"
                        onPress={toggleMenu}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={images.profile}
                        dimension="100%"
                        onPress={() => router.push('/Login')}
                    />
                ),
                headerTitle: () => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={SafeLink}
                            style={{ width: 65, height: 40, resizeMode: 'contain' }}
                        />
                    </View>
                ),
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <CurrentDisasters />
                    <UserMap />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;