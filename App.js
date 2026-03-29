// --- Topic - Modal Pop-up
// Like Showing Button to Clicking And pop some Same Changes on Your Screen.

import React, { useState } from "react";
import {View, StyleSheet, Button, Text, Modal} from 'react-native';

const App =() =>{
  const [Show, setShow] =useState(false)

return(
  <View style = {styles.container}>
    {
      Show?
      <View style = {styles.Modal}>
      <View style = {styles.body}>
      <Text> Some Text</Text>
      <Button title='Close' onPress={() => setShow(false)} />
        </View>
        </View>
        :null
    }
    <Button title='Open Dialog' onPress={() => setShow(true)} />
        </View>
);
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-end",
  },
  Modal:{
    flex: 1,
    backgroundColor: 'rgba(152, 158, 154, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default App;













