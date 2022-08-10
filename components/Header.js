import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Pomodoro tasks</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: 'blue',
        height: 80
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

});

export default Header