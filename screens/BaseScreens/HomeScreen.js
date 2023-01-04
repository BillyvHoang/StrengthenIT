import { Pressable, ScrollView, Text, View } from "react-native";

import HomeScreenHeader from "../HomeScreenFormats/ScreenHeader";
import Graph from "../HomeScreenFormats/Graph";
import SelectDate from "../HomeScreenFormats/SelectDate";
import StrengthStamina from "../HomeScreenFormats/Strength&Stamina";
function HomeScreen() {
  return (
    <>
      <HomeScreenHeader />
      <Graph />
      <SelectDate />
      <StrengthStamina />
    </>
  );
}

export default HomeScreen;
