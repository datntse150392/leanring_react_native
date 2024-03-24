import { useState } from "react";
import { View, StatusBar, ActivityIndicator, Button } from "react-native";
const Logo = require("./assets/icon.png");
export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        onPress={() => setLoading(true)}
        title="Display Activity Indicator"
      />
      <ActivityIndicator size={"large"} animating={loading}></ActivityIndicator>
    </View>
  );
}
