import { View, TextInput, StyleSheet, Text, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Validator } from 'email-validator'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router'
import styles from './signup.style'

const SignUp = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'Username must be at least 2 characters'),
        password: Yup.string()
            .required()
            .min(6, 'Password must be at least 6 characters'),
    })

    const onSignUp = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Firebase sign up successful!', email);
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <View style={styles.wrapper}>
            <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
            <Formik
                initialValues={{email: '', username: '', password: ''}}
                onSubmit={values => {
                    onSignUp(values.email, values.password);
                    console.log(values, "Successfully signed up!")
                    router.push('/Index')
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid  }) => (
                    <>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholderTextColor='gray'
                                placeholder='Email'
                                autoCapitalize='none'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholderTextColor='gray'
                                placeholder='Username'
                                autoCapitalize='none'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
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
                                <Text style={styles.buttonText}>Sign Up!</Text>
                            </Pressable>
                        </View>
                        <View style={styles.signupContainer}>
                            <Text style={styles.standardText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => router.push('/Login')}>
                                <Text style={styles.signUpText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignUp;