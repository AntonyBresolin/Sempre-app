import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './pages/components/inicio';
import Listas from './pages/components/listas';
import Planting from './pages/components/Planting';
import Fields from './pages/components/Fields';
import Fields_add_field from './pages/components/fields_add_field';


export default function App() {
  return (
    <View>
      <Fields />
    </View>
  );
}

