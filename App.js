// --- Topic - Platform 
// What is Platform  -> Platform Using For Detect Which OS(App Running) on Your PC (Android or iOS).


import React from "react";
import { View, StyleSheet, Button, Platform, Text } from "react-native";

const App = () => {
  const textColor = Platform.select({ // Here Checking PlatFrom.select
    android: "green",
    ios: "blue",
    size: 100,
  });

  return (
    <View style={styles.container}>
      <Text style={{ color: textColor}}>
        Hello Platform!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;