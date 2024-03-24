import { View, Text, Image, ImageBackground } from "react-native";

const Logo = require("./assets/icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={Logo} style={{ width: 200, height: 200 }}></Image>
      <Image
        source={{ uri: "https://picsum.photos/id/1/200/300" }}
        style={{ width: 200, height: 200 }}
      ></Image> */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/id/1/200/300" }}
        style={{ flex: 1 }}
      ></ImageBackground>
    </View>
  );
}
