import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: "yellow", top: 75, left: 100 }}>
        Box 2 shink
      </Box>
      <Box style={{ backgroundColor: "pink" }}>Box 3 shink</Box>
      <Box
        style={{
          backgroundColor: "orange",
          position: "absolute",
          bottom: 100,
          right: 100,
        }}
      >
        Box 4 shink
      </Box>
      <Box style={{ backgroundColor: "black" }}>Box 5 shink</Box>
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
