// --- Topic - is ActivityIndicator 
//  In Native is Symbol Like Loading single orr Like Shut-down Circle in PC ---

import React, { useState } from "react";
import { View, StyleSheet, Button, ActivityIndicator } from "react-native";

const App = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);     //-- Here Define 5 sec the Loading Indicator Running Then Cloused 
  };
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color="green" animating={show} />
      <Button title="showLoader" onPress={displayLoader} />
    </View>
  );
};

//  Here Styling Of inside the main ActivityIndicator --  

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;