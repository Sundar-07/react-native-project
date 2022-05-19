import axios from "axios";
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export default function TodoItem({ item,removeItem }) {
  
  return (
    <View key={item._id} style={styles.itemContainer}>
      <Text style={styles.text}>{item.title}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={()=>removeItem(item._id)}>
        <Icon name="delete" color="#f66" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 33,
    height: 50,
    paddingTop: 10,
    // backgroundColor:'red',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    flexDirection: "row",
  },
  text: {
    fontWeight: "400",
    color: "white",
  },
  removeButton: {
    position: "absolute",
    right: 30,
    paddingTop: 5,
    
  },
});
