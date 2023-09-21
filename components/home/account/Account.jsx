import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Button
} from "react-native";

import styles from "./account.style";


const Account = ({
    isLoggedIn,
    userProfile,
    onShowLogin,
    onShowRegister
}) => {
    
    if (isLoggedIn) {
        return (
            <View style={{ alignItems: 'center', padding: 10 }}>
                <Image source={userProfile.profilePic} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text style={{ fontSize: 18, marginVertical: 10 }}>{userProfile.username}</Text>
                <Text>{userProfile.email}</Text>
            </View>
        );
    } else {
        return (
            <View style={{ alignItems: 'center', padding: 10 }}>
            <Text>Welcome!</Text>
            <Button title="Login" onPress={onShowLogin} />
            <Button title="Sign Up" onPress={onShowRegister} />
            </View>
        );
    }
}

export default Account;

   /*
    const AccountPanel = () => {
        if(isLoggedIn)
        {
            return 
            (
                <View>
                    <Text>Welcome back!</Text>
                    <Text>{user.username}</Text>
                    <Text>{user.email}</Text>
                </View>
            )
        }
        else
        {
            return
            (
                <View>
                    <Text>Hi there!</Text>
                    <Text>Been here before?</Text>
                    <Button title="Login" onPress={() => setShowLoginPopup(true)} />
                    <Text>Or are you new here?</Text>
                    <Button title="Sign Up" onPress={() => setShowSignUpPopup(true)} />
                </View>
            )
        }
    }
    */