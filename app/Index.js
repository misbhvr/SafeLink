import {View, Text, ScrollView, SafeAreaView, Image, Alert, Modal, TouchableOpacity, Button} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { CurrentDisasters, ScreenHeaderBtn, Welcome } from '../components';
import UserMap from "../components/home/usermap/UserMap";
import SafeLink from '../assets/icons/logo.png';
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';
import TwitterFeed from "../components/home/twitterfeed/TwitterFeed";


const App = () => {
    const router = useRouter();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

const Home = () => {
    const navigation = useNavigation();

    //Function to navigate to the 'Donate' screen
    const navigateToDonate = () => {
        navigation.navigate('Donate')
    }

    //State variable and function to toggle the visibility of the menu modal
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    //Modal to display the menu and the main screen
    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Modal visible = {showMenu} animationType = "slide">
                <View style = { {flex: 1, backgroundColor: 'white'} }>
                    <View style = { {alignItems: 'flex-end', margin: 10} }>
                        <Button title = "Close" onPress = {toggleMenu}/>
                    </View>
                    <TouchableOpacity style = { {padding: 10} } onPress={() => {}}>
                        <Text style = {{fontSize: 16}}>Options</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { {padding:10} } onPress={() => {}}>
                        <Text style = {{fontSize: 16}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { {padding: 10} } onPress={() => {}}>
                        <Text style = {{fontSize: 16}}>Account Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { {padding: 10} } onPress={() => {}}>
                        <Text style = {{fontSize: 16}}>Log Out</Text>
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