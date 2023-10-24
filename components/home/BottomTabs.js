import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { HorizontalLine } from './Post'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/home_active_icon.png'),
        inactive: require('../../assets/home_inactive_icon.png'),
    },
    {
        name: 'Posts',
        active: require('../../assets/posts_active_icon.png'),
        inactive: require('../../assets/posts_inactive_icon.png'),
    },
    {
        name: 'Donate',
        active: require('../../assets/donate_active_icon.png'),
        inactive: require('../../assets/donate_inactive_icon.png'),
    },
    {
        name: 'Account',
        active: require('../../assets/user_active_icon.png'),
        inactive: require('../../assets/user_inactive_icon.png'),
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Posts')

    {/*const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: icon.inactive }} style={styles.icon}/>
        </TouchableOpacity>
        
    )*/}

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={activeTab === icon.name ? icon.active : icon.inactive} 
                style={styles.icon}
            />
        </TouchableOpacity>
    )

    return (
    <View style={styles.wrapper}>
        <HorizontalLine />
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0.2%',
        zIndex: 999,
        backgroundColor: 'white',
    },
    
    container: {
        flexDirection: 'row',
        justifyContent:'space-around',
        height: 50,
        paddingTop: 10,
    },
    
    icon: {
        width: 30,
        height: 30,
    },

})

export default BottomTabs