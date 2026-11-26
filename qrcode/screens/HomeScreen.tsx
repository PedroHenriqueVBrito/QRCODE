import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>TECNOLOGIA NO DIA A DIA</Text>
        <Text style={styles.title}>Como funciona um QR Code?</Text>
        <Text style={styles.subtitle}>
          Vamos entender a ideia e depois testar com a câmera.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>O que é um QR Code?</Text>
        <Text style={styles.cardText}>
          É um código formado por vários quadradinhos pretos e brancos. Esses
          quadradinhos guardam informações, como um link ou uma mensagem.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Como ele funciona</Text>
      <Step number="1" title="A informação" text="Um link ou texto é escolhido para entrar no código." />
      <Step number="2" title="Os quadradinhos" text="O sistema transforma essa informação em um desenho." />
      <Step number="3" title="Os três cantos" text="Os quadrados maiores ajudam a câmera a encontrar o código." />
      <Step number="4" title="Se estiver danificado" text="O código consegue recuperar uma parte pequena que foi perdida." />
      <Step number="5" title="A leitura" text="A câmera entende o desenho e mostra a informação." />

      <View style={styles.questionCard}>
        <Text style={styles.questionTitle}>Para pensar</Text>
        <Text style={styles.questionText}>
          Por que ele ainda funciona quando uma parte pequena está rasgada?
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Leitor')}>
        <Text style={styles.buttonText}>Abrir leitor de QR Code</Text>
      </Pressable>
    </ScrollView>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <View style={styles.step}>
      <View style={styles.number}><Text style={styles.numberText}>{number}</Text></View>
      <View style={styles.stepBody}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 18, paddingBottom: 34, backgroundColor: '#f5f8fa' },
  hero: { backgroundColor: '#146c94', borderRadius: 18, padding: 20, marginBottom: 14 },
  eyebrow: { color: '#b9e6f5', fontSize: 11, fontWeight: '800', letterSpacing: 1.1, marginBottom: 8 },
  title: { color: '#fff', fontSize: 28, lineHeight: 33, fontWeight: '800' },
  subtitle: { color: '#e4f5fa', fontSize: 15, lineHeight: 21, marginTop: 8 },
  card: { backgroundColor: '#fff', borderRadius: 14, padding: 17, borderLeftWidth: 5, borderLeftColor: '#f2b134', marginBottom: 22 },
  cardTitle: { color: '#173b4d', fontSize: 18, fontWeight: '800', marginBottom: 6 },
  cardText: { color: '#49616c', fontSize: 14, lineHeight: 21 },
  sectionTitle: { color: '#173b4d', fontSize: 20, fontWeight: '800', marginBottom: 11 },
  step: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 13, marginBottom: 9 },
  number: { width: 31, height: 31, borderRadius: 16, backgroundColor: '#dff3fa', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  numberText: { color: '#146c94', fontWeight: '900' },
  stepBody: { flex: 1 },
  stepTitle: { color: '#173b4d', fontSize: 16, fontWeight: '800', marginBottom: 3 },
  stepText: { color: '#536b75', fontSize: 14, lineHeight: 20 },
  questionCard: { backgroundColor: '#fff4d6', borderRadius: 14, padding: 17, marginTop: 6, marginBottom: 16 },
  questionTitle: { color: '#895d08', fontSize: 16, fontWeight: '800', marginBottom: 5 },
  questionText: { color: '#6e5a2e', fontSize: 14, lineHeight: 21 },
  button: { backgroundColor: '#146c94', borderRadius: 11, paddingVertical: 15, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
