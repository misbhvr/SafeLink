import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NewPostScreen from './screens/NewPostScreen'
import PostsScreen from './screens/PostsScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
} 

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen' 
            screenOptions={screenOptions}
        >
            <Stack.Screen name='PostsScreen' component={PostsScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack