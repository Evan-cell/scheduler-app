import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
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
    <View style={styles.container}>
      <View style={styles.content}></View>
      <Text>Pomodoro</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
