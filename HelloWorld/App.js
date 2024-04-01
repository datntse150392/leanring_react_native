import { View, StyleSheet, Text, Dimensions } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome to React Native!</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 64,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderColor: "black",
    backgroundColor: "blue",
    width: windowWidth > 500 ? "50%" : "70%",
    height: windowHeight > 800 ? "50%" : "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: windowHeight > 800 ? 30 : 20,
    textAlign: "center",
  },
});
