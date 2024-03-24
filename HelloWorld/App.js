import { useState } from "react";
import { View, Image, Text, Modal, Button } from "react-native";
const Logo = require("./assets/icon.png");
export default function App() {
  const [isVisableModal, setIsVisableModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Open Modal" onPress={() => setIsVisableModal(true)} />
      <Modal
        visible={isVisableModal}
        onRequestClose={() => setIsVisableModal(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View>
          <Image source={Logo} style={{ width: 200, height: 200 }} />
          <Text>Image Gallery</Text>
          <Button title="Closed" onPress={() => setIsVisableModal(false)} />
        </View>
      </Modal>
    </View>
  );
}
