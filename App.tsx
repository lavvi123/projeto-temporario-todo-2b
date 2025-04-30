import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text>TODO List</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  }
});
