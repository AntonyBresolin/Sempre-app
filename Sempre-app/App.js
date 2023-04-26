import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './pages/components/inicio';
import Listas from './pages/components/listas';


export default function App() {
  return (
    <View>
      <Listas />
    </View>
  );
}

