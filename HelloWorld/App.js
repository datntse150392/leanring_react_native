import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}>1</Box>
      <Box style={{ backgroundColor: "yellow" }}>1</Box>
      <Box style={{ backgroundColor: "green" }}>1</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 64,
    borderWidth: 10,
    borderColor: "blue",
  },
});
