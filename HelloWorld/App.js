import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 800 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: windowWidth > 500 ? 30 : 20,
              color: "white",
            },
          ]}
        >
          Welcome to React Native!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderColor: "black",
    backgroundColor: "blue",

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
