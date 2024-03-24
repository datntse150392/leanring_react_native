import { View, Button } from "react-native";

const Logo = require("./assets/icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Press")}
        color="yellow"
        disabled
      />
    </View>
  );
}
