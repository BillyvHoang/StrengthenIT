import { StyleSheet } from "react-native";
import { GlobalStyles } from "../styles";

export const PHStyle = StyleSheet.create({
  homeContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.MainColor,
  },
  TopRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Textcolor: {
    color: "white",
    fontSize: 12,
  },
});
