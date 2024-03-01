import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoTemp from '../../components/infoTemp'
import Previsao from '../../components/previsao'
export default function Home() {
  return (
    <View style={styles.container}>
       <InfoTemp/>
        <Previsao/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1564e3'
    }
})