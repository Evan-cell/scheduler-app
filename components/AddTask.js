import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList, TextInput,Button } from 'react-native';
function AddTask({addTask}) {
    const [text, setText] = useState("")
    const changeText = (val) =>{
        setText(val)
    }
  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder='add new task'
        onChangeText={changeText}
        />
        <Button 
        title='add task'
        onPress={() => addTask(text)}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    input :{
        margin: 10,
        paddingVertical: 6,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    }
  });

export default AddTask