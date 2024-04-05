import { View, Text, Button } from "react-native";
export function Setting({ navigation }) {
  return (
    <View>
      <Text>Setting Screen</Text>
      <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="GO TO ABOUT" onPress={() => navigation.jumpTo("About")} />
    </View>
  );
}
