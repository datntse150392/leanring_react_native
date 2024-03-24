import { View, StyleSheet, Text } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.textDarkMode}>
          Text Inheritance
          <Text style={styles.textBold}> in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>

      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
        <Text>Lightblue box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: "250",
    height: "25%",
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 10,
    padding: 20,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#d9d9d9",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  androidShadow: {
    elevation: 20,
  },
  darkMode: {
    backgroundColor: "black",
    color: "white",
  },
  textDarkMode: {
    color: "white",
  },
  textBold: {
    fontWeight: "bold",
  },
});
