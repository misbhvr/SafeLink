import {Dimensions, StyleSheet} from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-around',
    },
    extraInfo: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 5,
    },
    info: {
        width: 110,
        backgroundColor: COLORS.babyBlue,
        alignItems: "center",
        borderRadius: SIZES.xSmall,
        justifyContent: "center",
        padding: 2,
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: SIZES.xSmall,
    },
    infoText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.small,
        color: COLORS.lightWhite,
    },
    weatherIcon: {
        width: 50,
        height: 50,
    },
    standardText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
    }
})

export default styles;