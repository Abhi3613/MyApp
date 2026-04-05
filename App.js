 import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAPIData = async () => {  // async for line by line Execution
    try {
      const url = "http://192.168.1.5:3000/posts";
      let result = await fetch(url);
      let json = await result.json(); //  fix
      setData(json);                  //  store data
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList With API</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});















