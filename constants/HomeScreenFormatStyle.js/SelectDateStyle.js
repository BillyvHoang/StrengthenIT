import { StyleSheet } from "react-native";
import { GlobalStyles } from "../styles";

export const SelectDateStyle = StyleSheet.create({
  homeContainer: {
    backgroundColor: GlobalStyles.colors.MainColor,
  },
  dateContainer: {
    flexDirection: "row",
    padding: 1,
    justifyContent: "space-between",
    marginHorizontal: 30,
    backgroundColor: GlobalStyles.colors.MainColor,
  },
  Textsize: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
