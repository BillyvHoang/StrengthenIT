import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "../../constants/styles";

//import Icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Import Screens
import HomeScreen from "./HomeScreen";
import WorkOutScreen from "./WorkOutScreen";
import Setting from "./AccountScreen";

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
        options={{
          headerShown: false,
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="WorkOuts"
        component={WorkOutScreen}
        options={{
          headerShown: false,
          title: "WorkOuts",
          tabBarLabel: "WorkOuts",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dumbbell" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Setting}
        options={{
          headerShown: false,
          title: "Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
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
