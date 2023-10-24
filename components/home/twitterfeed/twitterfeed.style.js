import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    height: 440,
    width: 620,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    marginTop: SIZES.large,
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    textAlign: "center",
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },

});

export default styles;
