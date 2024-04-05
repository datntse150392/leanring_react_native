import { View, Text, Button } from "react-native";
export function Home({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="GO TO ABOUT" onPress={() => navigation.jumpTo("About")} />
    </View>
  );
}
