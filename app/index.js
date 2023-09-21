import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter, RouterProvider } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { NearbyMap, Donations, ScreenHeaderBtn, Welcome } from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = () => {
    const router = useRouter();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options = {{ headerStyle : { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
                    ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl = {icons.profile} dimension = "100%"/>
                ),
                headerTitle: ""
                }}
            />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium
                        }}
                        >
                        <Welcome

                            />
                        <TouchableOpacity onPress={() => router.navigate('Donate')}>
                            <Text>Donations</Text>
                        </TouchableOpacity>
                        <NearbyMap />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Home;

/*
import React, { useState } from 'react';
import { View, SafeAreaView, Image, ScrollView, Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { RouterNavigator } from 'expo-router';
import Router from './AppRouter';

import SafeLink from '../assets/icons/logo.png';
import { COLORS, icons, images, SIZES, } from '../constants';
import { ScreenHeaderBtn, Welcome, Account, Donations } from '../components';

function App() {
    return (
        <RouterNavigator router={Router} />
    );
}

const Home = () => {
    const router = useRouter();

    return (
    <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen options = {{ headerStyle : { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
              <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
            ),
          headerRight: () => (
              <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"/>
          ),
          headerTitle: () => (
              <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                      source={SafeLink}
                      style={{ width: 65, height: 50, resizeMode: 'contain'}}
                  />
              </View>
          ),
          }}
        />
    
        <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                        
                }}
            >
                <Welcome />
                <Account />
                <Button
                    title="See Donations"
                    onPress={() => router.push('/donations')}
                />
            </View>
        </ScrollView>
    </View>

    </SafeAreaView>
  )
}

export default Home;


import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Image, Animated } from 'react-native';
//import { Stack, useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, icons, images, SIZES, } from '../constants';
import { ScreenHeaderBtn, Welcome, Account } from '../components';


import SafeLink from '../assets/icons/logo.png';
import RegisterPopUp from '../components/home/account/Register';

const Home = () => {
    //const router = useRouter();
    const [isAccountVisible, setAccountVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState({
        //profilePic: images.profile,
        username: 'John Doe',
        email: 'john.doe@test.com'
    });

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showRegisterPopup, setShowRegisterPopup] = useState(false);

    const handleMenuPress = () => {
        setAccountVisible(!isAccountVisible);
    };

 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, flexDirection: 'row' }}>
            
            {isAccountVisible && (
                <Animated.View style={{ 
                    flex: 0.5, 
                    height: '100%', 
                    backgroundColor: 'white',
                    borderRightWidth: 1,
                    borderColor: COLORS.lightGray 
                }}>
                    <Account 
                        isLoggedIn={isLoggedIn}
                        userProfile={user}
                        onShowLogin={() => setShowLoginPopup(true)}
                        onShowRegister={() => setShowRegisterPopup(true)}
                    />
                </Animated.View>
            )}

            {showLoginPopup && (
                <LoginPopup 
                    onClose={() => setShowLoginPopup(false)} 
                    onLogin={() => {
                        setIsLoggedIn(true);
                        setShowLoginPopup(false);
                    }} 
                />
            )}

            {showRegisterPopup && (
                <RegisterPopUp onClose={() => setShowRegisterPopup(false)} />
            )}

            <View style={{ flex: isAccountVisible ? 0.5 : 1 }}>
                <Stack.Screen
                options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                    iconUrl={icons.menu} 
                    dimension="60%" 
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile}
                    dimension="100%" 
                    onPress={handleMenuPress}
                    />
                ),
                headerTitle: () => (
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={SafeLink}
                            style={{ width: 65, height: 50, resizeMode: 'contain'}}
                        />
                    </View>
                ),
                }}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium
                        
                        }}
                        >
                        <Welcome />

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Home; 
*/