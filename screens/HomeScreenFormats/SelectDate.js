import { View } from "react-native";
import DateButton from "./buttons/DateButton";
import { SelectDateStyle } from "../../constants/HomeScreenFormatStyle.js/SelectDateStyle";

function SelectDate() {
  return (
    <View style={SelectDateStyle.homeContainer}>
      <View style={SelectDateStyle.dateContainer}>
        <DateButton style={SelectDateStyle.Textsize}>1D</DateButton>
        <DateButton style={SelectDateStyle.Textsize}>1W</DateButton>
        <DateButton style={SelectDateStyle.Textsize}>1M</DateButton>
        <DateButton style={SelectDateStyle.Textsize}>3M</DateButton>
        <DateButton style={SelectDateStyle.Textsize}>1Y</DateButton>
        <DateButton style={SelectDateStyle.Textsize}>All</DateButton>
      </View>
    </View>
  );
}

export default SelectDate;
