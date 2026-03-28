// --- Topic - Pressable in Native
//  Pressable is a component In Native That Detect Interation Of Touch and Then Go to Conformation of Your UI Elements.
//  Touch like (Press long, Press In, Press Out, and Normal Tab We can Use 4 Types Press)

import React from "react";
import { View, StatusBar, StyleSheet, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="orange" 
      barStyle="light-content"  
      hidden = {false}
      />

      <Button title = 'Toogle Status Bar' onPress={() => setInstanceHandle(!Hide)} />
        
      <Button title = 'Toogle Status Bar' onPress={() => setBarStyle("dark-content")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;