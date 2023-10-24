import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert,Image } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from "./login.style"

const Login = ({navigation}) => {
    const router = useRouter();
    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Password must contain at least 8 characters')
    })

    const onLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful!', email, password);
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
                        <Image source={require('../assets/icons/logo.png')} style={styles.logo}/>
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

                        <View style={styles.buttonContainer}>
                            <Pressable
                                titleSize={20}
                                style={[styles.button(isValid), { width: "70%", alignItems: "center", marginTop: 20 }]}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </Pressable>
                        </View>

                        <View style={styles.signupContainer}>
                            <Text style={styles.standardText}>Don't have an account? </Text>
                            <TouchableOpacity onPress = {() => router.push('/SignUp')}>
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}



export default Login