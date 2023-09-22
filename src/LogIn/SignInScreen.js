    import React,{useState} from "react";
    import{View, Text, Image, StyleSheet, useWindowDimensions, Pressable} from "react-native";
    import Logo from "../../assets/safelink.png";
    import UserInput from "../../components/UserInput/UserInput.js";
    import CustomButton from "../../components/CustomButton/CustomButton.js";
    import {Stack, useRouter} from 'expo-router';
    import SignUpScreen from "../SignUp/SignUpScreen";
    

    const SignInScreen = () => {
        const [username, setUsername] = useState(''); 
        const [password, setPassword] = useState('');  


        const {height} = useWindowDimensions();

        //const navigation = useNavigation();

        const onSignInPress = () => {
            alert('You signed In');
        }

        return(
            
            <View style = {styles.root}>
                
                <Image 
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"/>

                <UserInput placeholder="Username" value={username} setValue={setUsername}/>
                <UserInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry
                />

                <CustomButton text="Log In"  />
                <CustomButton text="Continue as a Guest"  />
                <Pressable placeholder="Sign Up" onPress={SignUpScreen} >
                    <Text style={styles.text}>Sign Up</Text>
                </Pressable>
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
        text: {
            width : 390,
            height: 40,
            borderColor:'#3d8af7',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginVertical: 5,
            textAlign: 'center',
            color: '#3d8af7',
            
        },
    });

    export default SignInScreen;