import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailsScreen() {
  const {id} = useLocalSearchParams()
  
    return (
    <View style={styles.container}>
      <Text>Detail of blog - {id} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})