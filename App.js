import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView  } from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Task from './components/Task';
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
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
      <FlatList 
      data={task}
      renderItem={({item})=>(
       <Task item={item}/>
      )}
      />
      </View>
      </View>
     
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
