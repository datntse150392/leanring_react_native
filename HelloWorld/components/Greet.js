import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}
