import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", flexBasis: 140 }}>Box 1</Box>
      <Box style={{ backgroundColor: "yellow", height: 140 }}>Box 2</Box>
      <Box style={{ backgroundColor: "green" }}>Box 4</Box>
      <Box style={{ backgroundColor: "green" }}>Box 5</Box>
      <Box style={{ backgroundColor: "green" }}>Box 6</Box>
      <Box style={{ backgroundColor: "green" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    flexWrap: "wrap",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "baseline",
    marginTop: 64,
    borderWidth: 10,
    borderColor: "blue",
    rowGap: 20,
    columnGap: 20,
  },
});
