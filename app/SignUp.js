import { View, TextInput, StyleSheet, Text, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik' 
import * as Yup from 'yup'
import { Validator } from 'email-validator'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router'



const Signup = ({navigation}) => {
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
                <Pressable
                    titleSize={20} 
                    style={styles.button(isValid)}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <View style={styles.signupContainer}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/Login')}>
                        <Text style={{color: '#3D8AF7'}}>Login</Text>
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
      resizeMode: 'contain',
      width: 250,
      height: 250,
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
        borderRadius: 5,
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

export default Signup;