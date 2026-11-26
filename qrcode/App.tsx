import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ScannerScreen from './screens/ScannerScreen';

export type RootStackParamList = {
  Inicio: undefined;
  Leitor: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#146c94' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: '#f5f8fa' },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ title: 'QR Code na prática' }}
        />
        <Stack.Screen
          name="Leitor"
          component={ScannerScreen}
          options={{ title: 'Leitor de QR Code' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
