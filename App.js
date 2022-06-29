import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { 
  Jost_700Bold, 
} from '@expo-google-fonts/jost'
import { 
  Jaldi_400Regular,
  Jaldi_700Bold 
} from '@expo-google-fonts/jaldi'

import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';



export default function App() {
  let[fontsLoaded, error]=useFonts({
    Jost_700Bold, Jaldi_400Regular,
    Jaldi_700Bold
  })
  
  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, styles.headerFont]}>Hey there,</Text>
      <Text style={[styles.textColor, styles.subheaderFont]}>go get those gains :&#x29; </Text>
      <Image
        source={require("./assets/whitefire.png")}
        style={{ width: 500, height: 200 }}
      />
      <Text style={[styles.textColor, styles.subheaderFont]}>Remember to stay hydrated! </Text>
      <Image 
        source={require("./assets/strongerman.png")}
        style={[styles.strongPicture]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3A47",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#CAD3C8",
  },
  subheaderFont: {
    fontSize: 25,
  },
  headerFont: {
    fontSize: 50,
    fontFamily: 'Jaldi_700Bold'
  },
  strongPicture: {
    borderRadius:20,
    width: 500,
    height: 250,
    resizeMode: 'contain'
  }
});
