// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPgRYu-3p8Eh3ZVVfEsUWgFT1HLQTqo-0",
    authDomain: "safelink-database.firebaseapp.com",
    projectId: "safelink-database",
    storageBucket: "safelink-database.appspot.com",
    messagingSenderId: "128791077636",
    appId: "1:128791077636:web:aaddbe8f141537946be651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export const auth = getAuth(app);