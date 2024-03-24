import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", flex: 1 }}>1</Box>
      <Box style={{ backgroundColor: "yellow", flex: 2 }}>1</Box>
      <Box style={{ backgroundColor: "green", flex: 3 }}>1</Box>
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
