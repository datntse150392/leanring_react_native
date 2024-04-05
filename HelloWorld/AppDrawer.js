import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./components/home";
import { About } from "./components/about";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Hosme"
          component={Home}
          options={{
            title: "Home Screen",
            drawerLabel: "Home",
            drawerActiveTintColor: "red",
            drawerContentStyle: {
              backgroundColor: "lightblue",
            },
          }}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
