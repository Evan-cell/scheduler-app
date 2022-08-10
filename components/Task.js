import React from 'react'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
function Task({item}) {
  return (
    <TouchableOpacity style={styles.task}>
         <Text>{item.task}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    task: {
      padding: 15,
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      marginTop:15,
      borderStyle: 'dotted'
    },

  });

export default Task