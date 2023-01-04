import { StyleSheet } from "react-native";
import { GlobalStyles } from "../styles";

export const HeaderStyle = StyleSheet.create({
  homeContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.MainColor,
  },
  TopRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  WeightCheckContainer: {
    backgroundColor: GlobalStyles.colors.GraphBackgroundContainer,
    alignItems: "center",
    borderRadius: 15,
    height: 40,
    width: 100,
  },
  TextCenter: {
    alignItems: "center",
    marginTop: 5,
    color: "white",
    fontSize: 25,
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
