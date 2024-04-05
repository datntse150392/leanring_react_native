import { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
export function Home({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
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
