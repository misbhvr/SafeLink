import React, { useState, useEffect }from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import MapView, {MapMarker, Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import styles from './usermap.style'

const UserMap = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const[errorMsg, setErrorMsg] = useState(null);

    const userLocation = async () => {
        let{status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
            setErrorMsg("Permission for location access is denied, please check your settings");
        }

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
        console.log(location.coords.latitude, location.coords.longitude);
    }

    useEffect(() => {
        userLocation();
    }, [])

    return (
    <View style={styles.container}>
        <Text style={styles.headerTitle}>Your Map</Text>
        <MapView style={styles.map}
                 region={mapRegion}>
            <MapMarker coordinate={mapRegion} title='You'/>
        </MapView>
    <TouchableOpacity style={styles.getLocationBtn} onPress={userLocation}>
        <Text style={styles.getLocationText}>Get Location</Text>
    </TouchableOpacity>
    </View>
    );
};

export default UserMap;