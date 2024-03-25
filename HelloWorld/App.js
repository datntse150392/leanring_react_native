import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", alignSelf: "flex-end" }}>Box 1</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 2</Box>
      <Box style={{ backgroundColor: "green" }}>Box 3</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "baseline",
    marginTop: 64,
    borderWidth: 10,
    borderColor: "blue",
  },
});
