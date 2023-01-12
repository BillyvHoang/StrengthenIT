import { Pressable, ScrollView, Text, View } from "react-native";
import { OPRStyle } from "../../../constants/PerformanceStatsStyle/OverallPrStyle";
import OverPrButton from "../../../constants/PerformanceStatsStyle/OverPrButton";

function OverallPR() {
  return (
    <View style={OPRStyle.homeContainer}>
      <View>
        <OverPrButton></OverPrButton>
      </View>
    </View>
  );
}

export default OverallPR;
