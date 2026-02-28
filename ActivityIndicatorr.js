// -- Topic Is ActivityIndicator --
// Create Button Press Function 
// Loding (True)  
// settimeout 3 orr some Sec 
// Then SetLoading(Flase)
//-- Codition Rendering --(True)- Show Spinner
                        // (False)- Spinner hide 

import React, { useState } from "react";
import { View, Button, ActivityIndicator } from "react-native";

const ActivityIndicatorr = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading && <ActivityIndicator size="large" color="orange" />}
      <Button title="Load Data" onPress={handlePress} />
    </View>
  );
};

export default ActivityIndicatorr;


