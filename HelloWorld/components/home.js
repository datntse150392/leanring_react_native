import { View, Text, Button } from "react-native";
export function Home({ route, navigation }) {
  const { name } = route.params;
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{name}</Text>
      <Button
        title="Update params"
        onPress={() =>
          navigation.setParams({
            name: "dsdasa",
          })
        }
      />
    </View>
  );
}
