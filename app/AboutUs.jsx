import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import group from "../assets/images/SafeLink.jpg";
import styles from "./aboutus.style"

const AboutUsPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>SafeLink</Text>
            </View>
            <Image source={group} style={styles.image}/>
            <Text style={styles.description}>
                SafeLink is a mobile application built to provide disaster relief and connect those in need with local aid organizations. The app provides real-time updates on disasters happening nearby and allows users to donate to vetted aid organizations responding to crises. SafeLink aims to get help to those who need it quickly and efficiently.
            </Text>
        </View>
    );
}

export default AboutUsPage;