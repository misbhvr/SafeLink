import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';

import styles from './fullmap.styles';
import React, {useState} from "react";

let locationsInterests = [
  {
    title: "First",
    location: {
      latitude: -27.2,
      longitude: 145,
    },
    description: "This is the first marker",
  },
  {
    title: "Second",
    location: {
      latitude: -30.2,
      longitude: 155,
    },
    description: "This is the second marker",
  }
]
function FullMap() {
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 148.11,
    latitude: -26.8,
  });

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationOfInterest = () => {
    return locationsInterests.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={location.location}
          title={location.title}
          description={location.description}
        />
      );
    });
  }

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
        {showLocationOfInterest()}
        <Marker
          draggable
          pinColor= "blue"
          coordinate={draggableMarkerCoord}
          OnDragEnd={(e) => {setDraggableMarkerCoord(e.nativeEvent.coordinate)}}
        />
        <Marker
        pinColor = "purple"
        coordinate={{latitude: -35, longitude: 147}}
        >
          <Callout>
            <Text>Count: </Text>
          </Callout>
        </Marker>
      </MapView>
      <StatusBar style="auto"/>
    </View>
  )
}
