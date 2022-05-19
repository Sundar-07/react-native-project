import axios from "axios";
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export default function TodoItem({ item,removeItem }) {
  
  return (
    <View key={item._id} style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.description}</Text>
        <Text style={styles.text3}>{item.ratings}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeItem(item._id)}
      >
        <Icon name="delete" color="#f66" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 33,
    height: 90,
    paddingTop: 10,
    // backgroundColor:'red',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    flexDirection: "row",
  },
  text: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },
  text2: {
    fontWeight: "500",
    color: "white",
    fontSize: 15,
  },
  text3: {
    fontWeight: "400",
    color: "white",
    fontSize: 12,
  },
  removeButton: {
    position: "absolute",
    right: 30,
    paddingTop: 5,
  },
});
