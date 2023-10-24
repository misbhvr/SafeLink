import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
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
        width: "75%",
    },

    button: (isValid) => ({
        backgroundColor: isValid ? '#3D8AF7' : '#7EB0F5',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
        marginHorizontal: 10,
        borderRadius: 10,

    }),
    buttonContainer :{
        width: "70%",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 10,
        fontStyle: "normal",
    },
    standardText: {
        color: 'black',
        fontSize: SIZES.medium,
        fontStyle: "normal",
    },
    signUpText: {
        color: COLORS.babyBlue,
        fontSize: SIZES.medium,
        fontStyle: "normal",
    },

    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10,
    }
});
export default styles;
