import { StyleSheet } from "react-native";
import { GlobalStyles } from "../styles";

export const StrengthStaminaStyle = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
    padding: 5,
  },

  homeContainer: {
    paddingTop: 0,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.MainColor,
  },
  Textcolor: {
    color: "white",
    fontSize: 25,
  },
});
