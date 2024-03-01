import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FetchApiWeather } from "../API/apiTemp";

export default function Previsao() {
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
      <View style={styles.containerTemp}>
        {apiTemp &&
          apiTemp.forecast.map((item, index) => (
            <View key={index}>
              {index === 0 && (
                <View style={styles.infoTemp}>
                  <Text style={styles.textTemp}>
                    {item.weekday} {item.description}
                  </Text>
                  <Text style={styles.textTemp}>
                    {item.max}/{item.min}
                  </Text>
                </View>
              )}
              {index === 1 && (
                <View style={styles.infoTemp}>
                  <Text style={styles.textTemp}>
                    {item.weekday} {item.description}
                  </Text>
                  <Text style={styles.textTemp}>
                    {item.max}/{item.min}
                  </Text>
                </View>
              )}
              {index === 2 && (
                <View style={styles.infoTemp}>
                  <Text style={styles.textTemp}>
                    {item.weekday} {item.description}
                  </Text>
                  <Text style={styles.textTemp}>
                    {item.max}/{item.min}
                  </Text>
                </View>
              )}
            </View>
          ))}
        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={() => alert("Bruno Viadinho")}
            style={styles.buttonPrev}
          >
            <Text style={styles.textPrev}>Previsão para 5 dias</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  containerTemp: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
  },
  infoTemp: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  textTemp: {
    color: "#fff",
  },
  viewButton: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrev: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: "90%",
    height: 50,
    borderRadius: 100000,
    alignItems: "center",
    justifyContent: "center",
  },
  textPrev: {
    color: "#fff",
    fontSize: 16,
  },
});
