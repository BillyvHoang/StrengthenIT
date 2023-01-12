import { Pressable, ScrollView, Text, View } from "react-native";
import { PHStyle } from "../../constants/HomeScreenFormatStyle.js/PerformanceHeaderStyle";

function PerformanceHeader() {
  return (
    <View style={PHStyle.homeContainer}>
      <View style={PHStyle.TopRowContainer}>
        <Text style={PHStyle.Textcolor}>Performance</Text>
        <Text style={PHStyle.Textcolor}>Stats Value</Text>
        <Text style={PHStyle.Textcolor}>Stats %</Text>
      </View>
    </View>
  );
}

export default PerformanceHeader;
