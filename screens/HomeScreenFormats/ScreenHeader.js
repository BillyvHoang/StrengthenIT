import { Pressable, ScrollView, Text, View } from "react-native";
import { HeaderStyle } from "../../constants/HomeScreenFormatStyle.js/HeaderStyle";

function HomeScreenHeader() {
  return (
    <View style={HeaderStyle.homeContainer}>
      <View style={HeaderStyle.TopRowContainer}>
        <Text style={HeaderStyle.Textcolor}>Performance</Text>
        <View style={HeaderStyle.WeightCheckContainer}>
          <Text style={HeaderStyle.TextCenter}>187</Text>
        </View>
      </View>
    </View>
  );
}

export default HomeScreenHeader;
