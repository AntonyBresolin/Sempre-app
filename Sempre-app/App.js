import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './pages/inicio';
import Listas from './pages/listas';
import Planting from './pages/Planting';
import Fields from './pages/components/Fields';
import Fields_item from './pages/components/fields_item';
import Fields_add_field from './pages/components/fields_add_field';
import newExperiment from './pages/experimento';
import addItem from './pages/item';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItensView from './pages/ItensView';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Listas" component={Listas} />
        <Stack.Screen name="Planting" component={Planting} />
        <Stack.Screen name="Fields" component={Fields} />
        <Stack.Screen name="Fields_item" component={Fields_item} />
        <Stack.Screen name="Fields_add_field" component={Fields_add_field} />
        <Stack.Screen name="Experimento" component={newExperiment} />
        <Stack.Screen name="Item" component={addItem} />
        <Stack.Screen name="ItensView" component={ItensView} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

