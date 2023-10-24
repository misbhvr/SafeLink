import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        backgroundColor: COLORS.babyBlue,
        textAlign: "center",
        padding: SIZES.small,
        marginTop: SIZES.small,
        borderRadius: 10,
        width: '100%'
    },
    donationCard: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 10,
        justifyContent: "center",
        padding: SIZES.small,
        marginVertical: SIZES.small,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
    },
    container: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
    },
    userName: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginBottom: SIZES.medium,
    },
    forgot: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginBottom: SIZES.large,
    },
});

export default styles;