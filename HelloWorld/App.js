import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import PokemonCard from "./components/PokemonCard";
import data from "./data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <ScrollView>
        <View style={styles.container}>
          {data &&
            data.pokemon.map((pokemon) => {
              return <PokemonCard key={pokemon.name} {...pokemon} />;
            })}
        </View>
      </ScrollView> */}
      <FlatList
        data={data.pokemon}
        renderItem={({ item }) => {
          return <PokemonCard key={item.name} {...item} />;
        }}
        // KeyExtractor is a function that takes an item and returns a unique key for that item.
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
        ListEmptyComponent={<Text>No items Found</Text>}
      />
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
