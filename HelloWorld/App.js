import { View, Pressable, Image, Text } from "react-native";

const Logo = require("./assets/icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Pressable onPress={() => console.log("Text Press")}>
        <Text>Image Gallery</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Image Press")}>
        <Image style={{ width: "100%", height: 200 }} source={Logo}></Image>
      </Pressable>
      <Pressable onLongPress={() => console.log("Image onLongPress")}>
        <Image style={{ width: "100%", height: 200 }} source={Logo}></Image>
      </Pressable>
    </View>
  );
}
