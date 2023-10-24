import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES, COLORS } from '../../../constants';
import { search } from '../searchFunction/searchFunction';

const menuBar = ['Disaster Map', 'Donations'];

const Welcome = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            Alert.alert('Please enter a search query.');
        } else {
            const results = search(searchQuery);
            setSearchResults(results);

            if (results.length === 1) {
                navigation.navigate(results[0]);
            }
        }
    };

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
                        placeholder="What are you looking for?"
                        placeholderTextColor={COLORS.gray2}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
                    <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
                </TouchableOpacity>
            </View>

            {searchResults.length > 0 && (
                <View style={styles.searchResultsContainer}>
                    <FlatList
                        data={searchResults}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.searchResultItem}
                                onPress={() => navigation.navigate(item)}
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                    />
                </View>
            )}

            <View style={styles.tabsContainer}>
                <FlatList
                    data={menuBar}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => {
                                if (item === 'Donations') {
                                    navigation.navigate('Donate');
                                }
                                if (item === 'Disaster Map') {
                                    navigation.navigate('FullMap');
                                }
                            }}
                        >
                            <Text style={styles.tabText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    );
};

export default Welcome;
