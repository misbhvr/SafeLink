import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Linking } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './donationtabs.style'
import { COLORS, SIZES, images } from '../../../constants';
import DonationsCard from '../../common/cards/popular/DonationsCard';

const Donationtabs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  const handleCardPress = (url) => {
    if (url) {
      Linking.openURL(url)
    .catch(error => console.error('Sorry there was an error', error));
    }
  }

  const data = [
    { id: 1, text: 'Libya Flood Emergency', url: 'https://www.unicef.org.nz/appeals/libya-flood-emergency' },
    { id: 2, text: 'Global Malnutrition Crisis', url: 'https://www.unicef.org.nz/appeals/the-greatest-need' },
    { id: 3, text: 'Aid to those affected by the Moroccan Earthquake', url: 'https://www.unicef.org.nz/appeals/global-malnutrition-crisis' },
  ];

  return (
    <View style = {styles .container}>
      <View style = {styles.centerContent}>
        <Text style = {styles.headerTitle}>Feel free to donate here</Text>
      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size = "large" colors = {COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data = {data}
            renderItem = { ( {item} ) => (
              <DonationsCard 
                item = {item.id}
                text = {item.text}
                url = {item.url}
                handleCardPress = {handleCardPress}
              />
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle = { {columnGap: SIZES.medium} }
            ItemSeparatorComponent={() => <View style = {{ height: SIZES.medium}} />}
            vertical
          />
        )}
      </View>
    </View>
  )
}

export default Donationtabs