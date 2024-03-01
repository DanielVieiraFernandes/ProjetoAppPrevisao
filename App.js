import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/routes/Router';

export default function App() {
  return (
    <View style={styles.container}>
      <Router/>
      <StatusBar translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
