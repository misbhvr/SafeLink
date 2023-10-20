import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
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
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        width: "85%",
        marginTop: SIZES.medium,
        marginBottom: SIZES.small,

    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.gray2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    pressBtn: {
        marginTop: SIZES.medium,
        backgroundColor: COLORS.babyBlue,
        borderRadius: SIZES.medium,
        paddingVertical: SIZES.small / 1.5,
        paddingHorizontal: SIZES.small,
        alignItems: "center",
        width: screenWidth * 0.7,
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.lightWhite,
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    forgot: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginBottom: SIZES.large,
    },
});

export default styles;
