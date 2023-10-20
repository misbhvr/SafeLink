import {View, Text, ScrollView, SafeAreaView, Image, Alert} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { CurrentDisasters, ScreenHeaderBtn, Welcome } from '../components';
import UserMap from "../components/home/usermap/UserMap";
import TwitterFeed from "../components/home/twitterfeed/TwitterFeed";
import SafeLink from '../assets/icons/logo.png';
import { router } from 'expo-router';

const Home = () => {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen options = {{ headerStyle : { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
              <ScreenHeaderBtn
                  iconUrl = {icons.menu}
                  dimension = "60%"
                  onPress = {() => Alert.alert('Menu')}
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