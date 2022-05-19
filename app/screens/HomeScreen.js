import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";
import axios from "axios";
import { Input, Icon} from "@rneui/themed";

export default function HomeScreen() {
  const [items, setItems] = useState([]);
const [enteredText, setEnteredText] = useState("");


const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [ratings, setRatings] = useState("");


  useEffect(() => {
    axios
      .get("http://192.168.1.3:5000/api/todos/")
      .then((response) => {
        // console.log("Data: ", response.data);
        setItems(response.data);
      })
      .catch((error) => console.log("Error specified: ", error));
  }, [items]);

  //delete
  const removeItem = (id) => {
    axios
      .delete(`http://192.168.1.3:5000/api/todos/${id}`)
      .then((response) => {
        console.log("Deleted ");
        setItems(response.data)
      })
      .catch((error) => console.log("Error specified while deleting: ", error));
  };
//addItem
  const addItem = () => {
    axios
      .post(`http://192.168.1.3:5000/api/todos/`,{title:title,description:description,ratings:ratings})
      .then((response) => {
        console.log("Added ");
        // setItems(response.data);
      })
      .catch((error) => console.log("Error specified while deleting: ", error));
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo Items</Text>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TodoItem item={item} removeItem={removeItem} />
          )}
        />
      </View>

      <View style={styles.container3}>
        <Input
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
        <Input
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          
        />
        <Input
          placeholder="Enter your ratings"
          keyboardType="number-pad"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          
        />
        <View>
          <Button title="Add Todo" onPress={addItem}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#fada2e",
    width: "100%",
    height: "15%",
    paddingLeft: 30,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 30,
    marginTop: "20%",
  },
  bodyContainer: {
    backgroundColor: "#3700B3",
    width: "100%",
    height: "auto",
  },
  container3: {
    // backgroundColor: "blue",
    width: "100%",
    height: "50%",
  },
});
