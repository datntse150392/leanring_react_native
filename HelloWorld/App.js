import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "blue",
          tabBarLabelPosition: "beside-icon",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <Ionicons name="person" size={20} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="About Stack" component={AboutStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
