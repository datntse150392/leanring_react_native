import { useState } from "react";
import { View, StatusBar } from "react-native";
const Logo = require("./assets/icon.png");
export default function App() {
  const [isVisableModal, setIsVisableModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar hidden />
    </View>
  );
}
