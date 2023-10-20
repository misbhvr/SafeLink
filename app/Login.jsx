import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './login.style'
import { COLORS, icons, images, SIZES } from '../constants'
import { router } from 'expo-router';


const LoginScreen = () => {
    const [ state, setState ] = useState({
        email: '',
        password: ''
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcomeMessage}>Login</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Email"
                        placeholderTextColor={COLORS.lightWhite}
                        onChangeText={text => setState({email:text})}
                    />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={COLORS.lightWhite}
                        onChangeText={text => setState({password:text})}
                    />
                </View>
            </View>

            <TouchableOpacity style={{alignItems: "center"}}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pressBtn}>
                <Text style={styles.userName}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pressBtn}>
                <Text style={styles.userName}>Don't have an account?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;


