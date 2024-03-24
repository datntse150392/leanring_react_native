import { View, Text, StyleSheet } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    padding: 60,
    margin: 10,
  },
  title: {
    color: "red",
  },
});
