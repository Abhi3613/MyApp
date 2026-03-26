// --- Topic - Pressable in Native
//  Pressable is a component In Native That Detect Interation Of Touch and Then Go to Conformation of Your UI Elements.
//  Touch like (Press long, Press In, Press Out, and Normal Tab We can Use 4 Types Press)

import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => alert("Button Pressed!")}> // Here Simple Press (We can using Warn, alert etc)
        <Text style={styles.text}>Click Me</Text>         // It is Button Showing on Your Screen --
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    backgroundColor: "blue",
    color: "white",
  },
});

export default App;