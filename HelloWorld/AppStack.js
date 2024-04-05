import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={() => alert("On press menu")}>
              <Text style={{ color: "#000" }}>Menu</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{ name: "Guest" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
