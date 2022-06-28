import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.textColor}>Hey There,</Text>
      <Text style = {styles.textColor}>go get those gains &#128170; </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3A47',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#CAD3C8',
  }
});
