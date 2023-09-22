import React,{useState} from "react";
import{View, Text, Image, StyleSheet, useWindowDimensions} from "react-native";
import Logo from "../../assets/safelink.png";
//import { useNavigation } from "@react-navigation/native";
import UserInput from "../../components/UserInput/UserInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { useNavigation } from "@react-navigation/native";



const SignUpScreen = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');  
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {height} = useWindowDimensions();

    //const navigation = useNavigation();

    const onSignUpPress = () => {
        alert('Account Created');
    }

    const onContinueAsGuestPress = () => {
        alert('Continue as a Guest');
    }

    return(
        <View style = {styles.root}>
            <Image 
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain"/>

            <Text style={styles.title}>Sign Up</Text>

            <UserInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}/>

            <UserInput 
            placeholder="Email"
            value={email}
            setValue={setEmail}
            />

            <UserInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry 
            />

            <UserInput 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            setValue={setConfirmPassword}
            secureTextEntry 
            />
            
            <CustomButton text="Create Account" onPress={onSignUpPress}/> 

            <CustomButton text="Continue as a Guest" onPress={onContinueAsGuestPress} />        
            </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        height: 100,
    },
    title: {
        fontSize: 30,
        fontWeight : 'bold',
        color: 'black',
        margin: 10,
    },
});

export default SignUpScreen;