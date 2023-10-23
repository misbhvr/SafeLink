import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xxLarge,
        height: 440,
        width: 620,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        marginTop: Constants.statusBarHeight,
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
        textAlign: "center",
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    cardsContainer: {
        marginTop: SIZES.medium,
    },
    map: {
        width: 325,
        height: 325,
        marginTop: SIZES.medium,
        marginBottom: SIZES.small,
        borderRadius: SIZES.xSmall,
    },
    mapMarker: {
        width: 70,
        height: 60,
    },
    getLocationBtn:{
        marginTop: SIZES.small,
        width: 110,
        height: 35,
        backgroundColor: COLORS.babyBlue,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    getLocationText:{
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: COLORS.white,
    }
});

export default styles;