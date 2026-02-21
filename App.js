/* MAke Dynamic Radio Button
   1. Make an Array Of Skills.
   2. Apply Map Ovre the radio button
   3. Update State With skill
*/
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const options = ["Male", "Female", "Other"];

  const [selected, setSelected] = useState("");

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Select Gender
      </Text>

      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => setSelected(item)}
        >
          <View style={styles.outerCircle}>
            {selected === item && (
              <View style={styles.innerCircle} />
            )}
          </View>

          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}

      <Text style={{ marginTop: 20 }}>
        Selected: {selected}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 100,
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "orange",
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default App;