import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

import styles from './fullmap.style';
import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';

let locationsInterests = [
  {
    title: "Ghana",
    location: {
      latitude: 8.23283312067919,
      longitude: -0.6451147326177706,
    },
    description: "Flooding in Ghana",
  },
  {
    title: "Afghanistan",
    location: {
      latitude: 35.536957431268846,
      longitude: 63.56694584415227
    },
    description: "4.1 Magnitude Earthquake",
  },
  {
    title: "India",
    location: {
      latitude: 32.028235629089195,
      longitude: 76.90493204547984
    },
    description: "North India Flooding",
  },
  {
    title: "Korea",
    location: {
      latitude: 37.009590421266296,
      longitude: 127.70098760746997
    },
    description: "Flooding from heavy rainfall",
  },
  {
    title: "United Kingdom",
    location: {
      latitude: 55.862002731038146,
      longitude: -4.259980738618942
    },
    description: "Heavy rainfall from Scotland has caused flooding in Glasgow",
  },
  {
    title: "Brazil",
    location: {
      latitude: -28.99392529146909,
      longitude: -52.8974457647278
    },
    description: "Extra-tropical cyclone",
  },
]

function FullMap() {
  const [count, setCount] = useState(0);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const userLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setUserLocation(userLocation);
    })();
  }, []);

  const onRegionChange = (region) => {
    console.log(region);
  };

  return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            onRegionChange={onRegionChange}
            initialRegion={{
              latitude: -36.85314354542222,
              latitudeDelta: 27.499085419977938,
              longitude: 174.76876975191624,
              longitudeDelta: 15.95214800000022,
            }}
        >
          {locationsInterests.map((item, index) => (
              <Marker
                  key={index}
                  coordinate={item.location}
                  title={item.title}
                  description={item.description}
              />
          ))}

          {userLocation && (
              <Marker
                  coordinate={userLocation}
                  title="You"
                  description="This is where you are!"
              />
          )}
        </MapView>
        <StatusBar style="auto"/>
      </View>
  )
}

export default FullMap;
