import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import WorkOutScreen from "./WorkOutScreen";
import Setting from "./SettingScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function OverallContainer() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="WorkOuts" component={WorkOutScreen} />
      <BottomTabs.Screen name="Setting" component={Setting} />
    </BottomTabs.Navigator>
  );
}

function BaseContainer() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Container" component={OverallContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BaseContainer;
