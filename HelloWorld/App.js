import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import PokemonCard from "./components/PokemonCard";
export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakneeses: ["Water", "Ground", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.jpg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun"],
    weakneeses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
    weakneeses: ["Fire", "Flying", "Ice", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachul.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunder Shock", "Growl", "Tail Whip"],
    weakneeses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...pikachuData} />
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
