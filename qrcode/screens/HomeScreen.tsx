import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;

export default function HomeScreen({ navigation }: Props) {
  const isFocused = useIsFocused();
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#146c94" />
        <Text style={styles.message}>Verificando a câmera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.permissionTitle}>Câmera normal</Text>
        <Text style={styles.message}>
          Permita o acesso à câmera para abrir a primeira tela do aplicativo.
        </Text>
        {permission.canAskAgain ? (
          <Pressable style={styles.button} onPress={requestPermission}>
            <Text style={styles.buttonText}>Permitir câmera</Text>
          </Pressable>
        ) : (
          <Text style={styles.message}>
            A câmera foi bloqueada. Ative a permissão nas configurações do celular.
          </Text>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && <CameraView style={styles.camera} facing="back" />}

      <View style={styles.overlay}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Câmera normal</Text>
          <Text style={styles.subtitle}>
            Esta é a primeira tela. Toque no botão para abrir o leitor de QR Code.
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Leitor')}
        >
          <Text style={styles.buttonText}>Ler QR CODE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  camera: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 36,
  },
  infoBox: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
    borderRadius: 14,
    padding: 16,
    marginTop: 14,
  },
  title: { color: '#fff', fontSize: 23, fontWeight: '800' },
  subtitle: { color: '#e8f4f7', fontSize: 14, lineHeight: 20, marginTop: 6 },
  button: {
    backgroundColor: '#146c94',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f8fa',
  },
  permissionTitle: { color: '#173b4d', fontSize: 22, fontWeight: '800' },
  message: {
    color: '#5a707a',
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
});
