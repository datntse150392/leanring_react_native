import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
export function About() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>About Screen</Text>
      <Text>This is a simple React component.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
