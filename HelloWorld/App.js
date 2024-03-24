import { View, Button, Alert } from "react-native";
const Logo = require("./assets/icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid Data!", "DOB invalid", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ])
        }
      />
    </View>
  );
}
