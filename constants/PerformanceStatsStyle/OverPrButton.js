import { Pressable, ScrollView, Text, View } from "react-native";

function OverPrButton({ Header, StatsValue, StatsPercentage }) {
  return (
    <Pressable>
      <View>
        <Text>{Header}</Text>
        <Text>{StatsValue}</Text>
        <Text>{StatsPercentage}</Text>
      </View>
    </Pressable>
  );
}

export default OverPrButton;
