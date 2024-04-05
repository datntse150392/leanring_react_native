import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
export function About({ route }) {
  const navigation = useNavigation();
  const { name } = route.params;
  return (
    <View>
      <Text>About Screen</Text>
      <Text>{name}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate("Home", {
            name: "Test Data from About Screen",
          })
        }
      />
    </View>
  );
}
