import { Pressable, ScrollView, Text, View } from "react-native";

import HomeScreenHeader from "../HomeScreenFormats/ScreenHeader";
import Graph from "../HomeScreenFormats/Graph";

function HomeScreen() {
  return (
    <>
      <HomeScreenHeader />
      <Graph />
    </>
  );
}

export default HomeScreen;
