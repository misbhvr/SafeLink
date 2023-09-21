/*
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV4bF8qJhR-DaUnhVv0IUcFpAVxdn7J94",
    authDomain: "safelink-users.firebaseapp.com",
    projectId: "safelink-users",
    storageBucket: "safelink-users.appspot.com",
    messagingSenderId: "584556328353",
    appId: "1:584556328353:web:425c5c621b1fd43a5587e0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const aut = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

//Create custom Hook
export function useAuth() {
    const [ currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}
*/