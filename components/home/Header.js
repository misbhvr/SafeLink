import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'



const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.logo} 
                source={require('../../assets/SafeLink.png')} />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                <Image
                source={require('../../assets/plus_icon.png')} 
                style={styles.icon}
                />
            </TouchableOpacity>
            {/*
            <TouchableOpacity>
                <Image
                source={require('../../assets/like_icon.png')} 
                style={styles.icon}
                />
            </TouchableOpacity>
            */}

        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 50,
    },

    iconsContainer: {
        flexDirection: 'row',
    },
    
    logo: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
        marginLeft: 135,
    },

    icon: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: 'contain',
    }

})

export default Header