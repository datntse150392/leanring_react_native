import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import PokemonCard from "./components/PokemonCard";
import data from "./data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          {data &&
            data.pokemon.map((pokemon) => {
              return <PokemonCard key={pokemon.name} {...pokemon} />;
            })}
        </View>
      </ScrollView>
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
