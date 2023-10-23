import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter, Stack, useNavigation } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES, COLORS } from "../../../constants";

const menuBar = ["Current Disasters", "Disaster Map", "Donations"];

const Welcome = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('')
    const [activeMenuType, setActiveMenuType] = useState('Current Disasters')
    const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello there!</Text>
          <Text style={styles.welcomeMessage}>We hope you're safe out there!</Text>
      </View>

        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    placeholder = "What are you looking for?"
                    placeholderTextColor={COLORS.gray2}
                    value=''
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>

            <TouchableOpacity style = {styles.searchBtn} onPress={() => {}}>
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>
        </View>
        <View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={menuBar}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeMenuType, item)}
                            onPress={() => {
                                if (item === 'Donations')
                                {
                                    navigation.push('Donate');
                                }
                                setActiveMenuType(item);
                            }}
                        >
                            <Text style={styles.tabText(activeMenuType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{columnGap: SIZES.small}}
                    horizontal
                />
            </View>
        </View>
    </View>
  )
}

export default Welcome