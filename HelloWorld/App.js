import { View, StyleSheet, Text, SafeAreaView } from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>Welcome to React Native!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "plum",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
  },
});
