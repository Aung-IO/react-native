import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AllBlogs() {
    const id = 3
  return (
    <View style={styles.container}>
      <Text>AllBlogs</Text>
      {/* <Button title='Go to detail 1' onPress={() => router.push(`/details/${id}`)}/> */}

      <Link href={{
        pathname: '/details/[id]',
        params: {id : 123}
      }}>
      Go to detail 1
      </Link>
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