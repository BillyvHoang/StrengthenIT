import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//Import Screens
import HomeScreen from "./HomeScreen";
import WorkOutScreen from "./WorkOutScreen";
import Setting from "./AccountScreen";
import { GlobalStyles } from "../../constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function OverallContainer() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.MainColor },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.TabBarBackgroundColor,
        },
        tabBarActiveTintColor: GlobalStyles.colors.TabBarActiveColor,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="WorkOuts"
        component={WorkOutScreen}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Setting}
        options={{ headerShown: false }}
      />
    </BottomTabs.Navigator>
  );
}

function BaseContainer() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Container"
            component={OverallContainer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default BaseContainer;
