import React from 'react';
import {Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({text}) => {
    return (
        <Pressable style={styles.container} onPress={() => alert('You signed In')}>
        <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3d8af7',
        width: '100%',
        padding: 15,
        marginVertical: 4,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;
