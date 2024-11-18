import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function BlogLayout() {
  return (
    <Stack>
     <Stack.Screen name="index" />
    </Stack>
  )
}

const styles = StyleSheet.create({})