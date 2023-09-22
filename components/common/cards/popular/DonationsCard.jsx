import { View, Text, TouchableOpacity, Image } from 'react-native'
import { images } from './../../../../constants';
import React from 'react';

import styles from './donationscard.style'

const DonationsCard = ( {item, text, url, selectedJob, handleCardPress} ) => {
  return (
    <TouchableOpacity 
      style = {styles.container(selectedJob, item)}
      onPress = { () => handleCardPress(url)}>

      <View style = {styles.cardContent}>

        <TouchableOpacity 
          style = {styles.logoContainer(selectedJob, item)} 
          onPress = {() => handleCardPress(url)}>

          <Image 
            source = {images.donateLogo}
            resizeMode = "contain"
            style = {styles.logoImage}
          />
        </TouchableOpacity>

        <View style = {styles.textContainer}>
          <Text style = {styles.companyName} numberOfLines={1}>
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
  )
}

export default DonationsCard