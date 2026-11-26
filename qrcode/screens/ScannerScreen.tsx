import { useIsFocused } from '@react-navigation/native';
import { CameraView, type BarcodeScanningResult, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ScannerScreen() {
  const isFocused = useIsFocused();
  const [permission, requestPermission] = useCameraPermissions();
  const [resultado, setResultado] = useState<BarcodeScanningResult | null>(null);
  const [historico, setHistorico] = useState<string[]>([]);

  function aoLerCodigo(evento: BarcodeScanningResult) {
    setResultado(evento);
    setHistorico((itens) => (itens.includes(evento.data) ? itens : [evento.data, ...itens]));
  }

  function lerNovamente() {
    setResultado(null);
  }

  if (!permission) {
    return <Status message="Verificando a permissão da câmera..." carregando />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.status}>
        <Text style={styles.statusTitle}>A câmera é necessária</Text>
        <Text style={styles.statusText}>
          Autorize o acesso para testar a leitura de QR Codes. Se negar, você poderá
          voltar às configurações do aparelho e permitir depois.
        </Text>
        {permission.canAskAgain ? (
          <Pressable style={styles.button} onPress={requestPermission}>
            <Text style={styles.buttonText}>Permitir câmera</Text>
          </Pressable>
        ) : (
          <Text style={styles.statusText}>A permissão foi bloqueada nas configurações do aparelho.</Text>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aponte para um QR Code</Text>
      <Text style={styles.subtitle}>O resultado aparece quando o código for reconhecido.</Text>

      <View style={styles.cameraFrame}>
        {isFocused ? (
          <CameraView
            style={styles.camera}
            facing="back"
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            onBarcodeScanned={resultado ? undefined : aoLerCodigo}
          />
        ) : null}
        <View pointerEvents="none" style={styles.scanGuide} />
      </View>

      {resultado ? (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>QR Code encontrado</Text>
          <Text style={styles.resultType}>Tipo: {resultado.type}</Text>
          <Text selectable style={styles.resultData}>{resultado.data}</Text>
          <Pressable style={styles.button} onPress={lerNovamente}>
            <Text style={styles.buttonText}>Ler outro código</Text>
          </Pressable>
        </View>
      ) : (
        <Text style={styles.waiting}>Aguardando leitura...</Text>
      )}

      <Text style={styles.historyTitle}>Histórico desta sessão ({historico.length})</Text>
      <FlatList
        data={historico}
        keyExtractor={(item) => item}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum código lido ainda.</Text>}
        renderItem={({ item, index }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyNumber}>{index + 1}</Text>
            <Text selectable numberOfLines={2} style={styles.historyText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

function Status({ message, carregando = false }: { message: string; carregando?: boolean }) {
  return (
    <View style={styles.status}>
      {carregando && <ActivityIndicator size="large" color="#146c94" />}
      <Text style={styles.statusText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#f5f8fa' },
  title: { color: '#173b4d', fontSize: 22, fontWeight: '800' },
  subtitle: { color: '#5a707a', fontSize: 14, marginTop: 5, marginBottom: 14 },
  cameraFrame: { height: 300, borderRadius: 18, overflow: 'hidden', backgroundColor: '#193b4c', position: 'relative' },
  camera: { flex: 1 },
  scanGuide: { position: 'absolute', width: 205, height: 205, borderWidth: 3, borderColor: '#f2b134', borderRadius: 14, alignSelf: 'center', top: 47 },
  waiting: { color: '#607983', textAlign: 'center', marginTop: 12 },
  resultCard: { backgroundColor: '#fff', borderRadius: 14, padding: 15, marginTop: 13, borderWidth: 1, borderColor: '#cfe1e8' },
  resultTitle: { color: '#23613d', fontSize: 17, fontWeight: '800' },
  resultType: { color: '#637983', fontSize: 13, marginTop: 4 },
  resultData: { color: '#173b4d', fontSize: 15, lineHeight: 21, marginTop: 8 },
  button: { backgroundColor: '#146c94', alignItems: 'center', padding: 13, borderRadius: 10, marginTop: 13 },
  buttonText: { color: '#fff', fontWeight: '800' },
  historyTitle: { color: '#173b4d', fontSize: 17, fontWeight: '800', marginTop: 18, marginBottom: 8 },
  historyItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 9, marginBottom: 7 },
  historyNumber: { color: '#146c94', fontWeight: '800', width: 25 },
  historyText: { flex: 1, color: '#536b75', fontSize: 13 },
  empty: { color: '#7b8d94', fontSize: 13 },
  status: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#f5f8fa' },
  statusTitle: { color: '#173b4d', fontSize: 21, fontWeight: '800', textAlign: 'center' },
  statusText: { color: '#5a707a', fontSize: 15, lineHeight: 21, textAlign: 'center', marginTop: 12, marginBottom: 14 },
});
