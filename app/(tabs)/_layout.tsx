
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
             headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Tabs.Screen name='(home)' />
            <Tabs.Screen name='settings' />
        </Tabs>
    )
}

