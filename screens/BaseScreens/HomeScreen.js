import { Pressable, ScrollView, Text, View } from "react-native";

import HomeScreenHeader from "../HomeScreenFormats/ScreenHeader";
import Graph from "../HomeScreenFormats/Graph";
import SelectDate from "../HomeScreenFormats/SelectDate";
function HomeScreen() {
  return (
    <>
      <HomeScreenHeader />
      <Graph />
      <SelectDate />
    </>
  );
}

export default HomeScreen;
