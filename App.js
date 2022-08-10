import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView,ScrollView  } from 'react-native';
import React, {useState} from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
export default function App() {
  const [task, setTask] = useState(
    [
      {"task":"HTML I","done":true, "id": "1"},
      {"task":"CSS","done":true, "id": "2"},
      {"task":"Responsive design","done":true, "id": "3"},
      {"task":"Git","done":true, "id": "4"},
      {"task":"JavaScript I","done":true, "id": "5"},
      {"task":"JavaScript II","done":false, "id": "6"}
      ]
  )
  const addTask = (text) => {
    setTask(prevTasks => {
      return [{ task: text, id: uuidv4() }, ...prevTasks]
    })
  }
  const deleteTask = id =>{
    setTask(prevTasks =>{
      return prevTasks.filter(task=>task.id !=id)
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
      <View style={styles.content}>
      <AddTask addTask={addTask} />
        <View style={styles.list}>
          
      <FlatList 
      data={task}
      renderItem={({item})=>(
       <Task item={item}
       deleteTask={deleteTask}/>
      )}
      />
      </View>
      </View>
      </ScrollView>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:30
  },
  list:{
    marginTop: 30
  }
});
