import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };
    case "water": {
      return { borderColor: "#6493EA", emoji: "💧" };
    }
    case "fire": {
      return { borderColor: "#FF5733", emoji: "🔥" };
    }
    case "grass": {
      return { borderColor: "#4CAF50", emoji: "🌿" };
    }
    default: {
      return { borderColor: "#A8B820", emoji: "🐛" };
    }
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weakneeses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainenr}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves && moves.join(", ")}</Text>
      </View>

      <View style={styles.weakneesesContainer}>
        <Text style={styles.weakneesesText}>
          Weakneeses: {weakneeses && weakneeses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {
          widtd: 2,
          height: 2,
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainenr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },

  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
    marginTop: 20,
    width: "45%",
  },
  typeEmoji: { fontSize: 30, marginRight: 12 },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  weakneesesContainer: {
    marginBottom: 8,
  },
  weakneesesText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
