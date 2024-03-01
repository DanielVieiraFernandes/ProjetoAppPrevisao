import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './appStack'
export default function Router() {
    
  return (
    <NavigationContainer>
        <AppStack/>
    </NavigationContainer>
  )
}
