import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import PokemonCard from "./components/PokemonCard";
import data from "./data.json";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="email@example.com"
          // secureTextEntry
          // keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Text style={styles.textName}>This name is: {name}</Text>

        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="message"
          multiline
        />
      </View>
      <FlatList
        data={data.pokemon}
        renderItem={({ item }) => {
          return <PokemonCard key={item.name} {...item} />;
        }}
        // KeyExtractor is a function that takes an item and returns a unique key for that item.
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
        ListEmptyComponent={<Text>No items Found</Text>}
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text>
        }
        ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    padding: 12,
    margin: 12,
    borderWidth: 2,
  },
  textName: {
    margin: 12,
    fontSize: 20,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
