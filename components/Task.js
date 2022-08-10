import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
function Task({item,deleteTask}) {
  return (
    <TouchableOpacity style={styles.task}>
         <Text>{item.task}</Text>
         <MaterialIcons name="delete" size={24} color="black"
         onPress={()=>deleteTask(item.id)}
         />
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
      borderStyle: 'dotted',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

  });

export default Task