import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", flexGrow: 2 }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: "yellow", flexGrow: 3 }}>Box 2 shink</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 2 shink</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 64,
    borderWidth: 10,
    borderColor: "blue",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
