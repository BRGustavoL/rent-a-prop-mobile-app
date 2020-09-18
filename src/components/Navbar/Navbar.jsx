import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navbar(props) {
	return (
		<View style={styles.container}>
      <Text>{props.name}</Text>
      <StatusBar style="auto" />
    </View>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
