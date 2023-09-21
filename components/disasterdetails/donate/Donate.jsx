import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native'

import donations from './donationsData' 
import styles from './donate.style'

const DonationCard = ({ logo, title, description, link }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 20 }} onPress={() => Linking.openURL(link)}>
      <Image source={logo} style={{ width: 50, height: 50, marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{link}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Donate = () => {
  <View style={{ flex: 1, padding: 20 }}>
      <FlatList 
        data={donations}
        renderItem={({ item }) => <DonationCard {...item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
}

export default Donate;

