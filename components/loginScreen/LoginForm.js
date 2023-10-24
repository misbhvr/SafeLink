import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { auth } from '../../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({navigation}) => {
    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Password must contain at least 8 characters')
    })

    const onLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Firebase login successful!', email, password);
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
                    <View style={styles.inputField}>
                        <TextInput 
                            placeholderTextColor='gray'
                            placeholder='Phone number, username, or email'
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
                        <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
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

    inputField: {
        borderRadius: 5,
        padding: 12,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        borderWidth: 1,
    },

    button: (isValid) => ({
        backgroundColor: isValid ? '#3D8AF7' : '#7EB0F5',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
        borderRadius: 5,
    }),

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },

    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default LoginForm