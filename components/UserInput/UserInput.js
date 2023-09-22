import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UserInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            value ={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width : '100%',
        borderColor:'#3d8af7',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        height: 40,
    },
  
});

export default UserInput;
