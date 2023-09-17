import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { CurrentDisasters, Donations, ScreenHeaderBtn, Welcome } from '../components';
import UserMap from "../components/home/usermap/UserMap";
import SafeLink from '../assets/icons/logo.png';



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
                      style={{ width: 65, height: 40, resizeMode: 'contain'}}
                  />
              </View>
          ),
          }}
      />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, padding: SIZES.medium}}>
                <Welcome/>
                <CurrentDisasters />
                <UserMap />
                <Donations />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
};

export default Home;