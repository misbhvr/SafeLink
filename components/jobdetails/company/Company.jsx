import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ( {companyLogo, jobTitle, companyName, Location} ) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.logoBox}>
        <Image 
          source = {SafeLink}
          style = {styles.logoImage}
        />
      </View>

      <View style = {styles.jobTitleBox}>
        <Text style = {styles.jobTitle}> {jobTitle}</Text>
      </View>

      <View style = {styles.companyInfoBox}>
        <Text style = {styles/companyName}>{companyName} /</Text>
        <View>
          <Image 
            source/>
        </View>
      </View>
    </View>
  )
}

export default Company