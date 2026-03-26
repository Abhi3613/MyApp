// --- Topic - is Modal In Native 
// Modal is a component is That Dispaly Content Top of Your Screen Box orr Dialog box
// So Commonly Used For .Alert, .Forms, Conformation etc

import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    // Here on Press The Showing Modal Box 
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text>This is a Modal</Text>

          // --- Here Close Button when Information Getting The Click Close ---
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

//  --- And Here Styling ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;