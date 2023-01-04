import { View } from "react-native";
import { GraphStyle } from "../../constants/HomeScreenFormatStyle.js/GraphStyle";

function Graph() {
  return (
    <View style={GraphStyle.homeContainer}>
      <View style={GraphStyle.graphContainer}></View>
    </View>
  );
}

export default Graph;
