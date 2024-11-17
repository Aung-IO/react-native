import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Link href={"/somewhere"}>Go somewhere</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
