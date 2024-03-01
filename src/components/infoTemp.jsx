import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FetchApiWeather } from "./../API/apiTemp";


export default function InfoTemp() {
  const [apiTemp, setApiTemp] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await FetchApiWeather();
        setApiTemp(data);
      } catch (error) {
        console.error("Erro ao buscar temperatura:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo, styles.textTemp]}>{apiTemp.temp}°C</Text>
      <Text style={styles.textInfo}>{apiTemp.description}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
  },
  textInfo:{
    color: '#fff',
  },
  textTemp: {
    fontSize: 74
  }

})

