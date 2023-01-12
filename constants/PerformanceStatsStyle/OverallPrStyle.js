import { StyleSheet } from "react-native";
import { GlobalStyles } from "../styles";

export const OPRStyle = StyleSheet.create({
  homeContainer: {
    paddingTop: 0,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.MainColor,
  },
  Textcolor: {
    color: "white",
    fontSize: 25,
  },
  graphContainer: {
    marginTop: 20,
    padding: 110,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.GraphBackgroundContainer,
  },
});
