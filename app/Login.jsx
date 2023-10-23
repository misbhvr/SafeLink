import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert,Image } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation}) => {
    const router = useRouter();
    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Password must contain at least 8 characters')
    })

    const onLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Firebase login successful!', email, password);
            router.push('/Index');
        } catch (error) {
            Alert.alert(error.message);
        }
    };
  
    return (
    <View style={styles.wrapper}>
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                onLogin(values.email, values.password)
            }}
            validationSchema={loginFormSchema}
            validateOnMount={true}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                <>
                <Image source={require('../assets/icons/logo.png')}style={styles.logo}/>
                    <View style={styles.inputField}>
                        
                        <TextInput 
                            placeholderTextColor='gray'
                            placeholder='Email'
                            autoCapitalize='none'
                            textcontentType='emailAddress'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <TextInput 
                            placeholderTextColor='gray'
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                    </View>
                
                    <Pressable 
                    titleSize={20} 
                    style={styles.button(isValid)}
                    onPress={handleSubmit}

                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>

                    <View style={styles.signupContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress = {() => router.push('/SignUp')}>
                            <Text style={{color: '#3D8AF7'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    logo:{
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    inputField: {
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        marginHorizontal: 10,
        borderWidth: 1,
    },

    button: (isValid) => ({
        backgroundColor: isValid ? '#3D8AF7' : '#7EB0F5',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
        marginHorizontal: 10,
        borderRadius: 10,
    }),

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 10,
    },

    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default Login