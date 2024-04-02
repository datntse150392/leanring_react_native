import { View, StyleSheet, SafeAreaView, Platform } from "react-native";
import PokemonCard from "./components/PokemonCard";
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <PokemonCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "f5f5f5",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "f5f5f5",
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },
});
