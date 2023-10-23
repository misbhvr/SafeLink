import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
    },
    description: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
        alignItems: "center",
        textAlign: "center",
        borderWidth: 2,
        borderColor: COLORS.babyBlue,
        borderRadius: 10,
        padding: 10,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.lightWhite,
        marginTop: 2,

    },
    header: {
        marginTop: SIZES.large,
        backgroundColor: COLORS.babyBlue,
        alignItems: "center",
        width: 120,
        height: 40,
        borderRadius: SIZES.medium,
        justifyContent: "center",
    },
    image: {
        width: 320,
        height: 300,
        borderRadius: SIZES.large,
        marginVertical: SIZES.medium,
    }

});

export default styles;
