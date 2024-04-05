import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Setting } from "./components/setting";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>;
};
export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
