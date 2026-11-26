QR Code na Prática

Aplicativo educativo desenvolvido para o trabalho prático de React Native. O projeto utiliza a câmera do celular para demonstrar a leitura de QR Codes.

<p align="center">
<a href="https://snack.expo.dev/@pedrohvbrito/qrcode">Abrir no Expo Snack</a>
  ·
  <a href="https://github.com/PedroHenriqueVBrito/QRCODE">Repositório no GitHub</a>
</p>

Sobre o projeto

O aplicativo começa mostrando uma câmera normal. A partir do botão Ler QR CODE, o usuário acessa uma segunda tela que identifica QR Codes usando a câmera do aparelho.

O projeto também demonstra como solicitar permissão para usar a câmera, navegar entre telas, guardar informações com useState e mostrar o histórico dos códigos lidos durante a sessão.

Funcionalidades

•
Exibição da câmera traseira na primeira tela.

•
Botão Ler QR CODE para abrir o leitor.

•
Navegação entre duas telas reais.

•
Solicitação e tratamento da permissão da câmera.

•
Leitura de códigos do tipo QR.

•
Exibição do tipo e do conteúdo encontrado.

•
Botão para ler outro código.

•
Histórico dos QR Codes lidos durante a sessão.

•
Mensagem de orientação quando a permissão é negada.

Telas

Câmera normal

A primeira tela mostra a câmera traseira e o botão que leva o usuário para o leitor de QR Code.

Leitor de QR Code

A segunda tela abre a câmera configurada para procurar somente códigos QR. Quando encontra um código, o aplicativo mostra seu conteúdo e adiciona o resultado ao histórico da sessão.

Tecnologias utilizadas

•
React Native

•
TypeScript

•
Expo Snack

•
Expo SDK 54

•
Expo Camera

•
React Navigation

•
Native Stack Navigator

Dependências

O projeto foi preparado para o Expo SDK 54. As dependências de referência são:

JSON


{
  "expo-camera": "~17.0.7",
  "@react-navigation/native": "^7.0.0",
  "@react-navigation/native-stack": "^7.0.0",
  "react-native-screens": "~4.16.0",
  "react-native-safe-area-context": "~5.6.0"
}



No Expo Snack, selecione o SDK 54 e adicione as dependências pela aba Dependencies. Caso o Snack sugira versões compatíveis, aceite as versões indicadas para o SDK escolhido.

Estrutura do projeto

Plain Text


App.tsx
screens/
├── HomeScreen.tsx
└── ScannerScreen.tsx
README.md



Responsabilidade dos arquivos

•
App.tsx: configura a navegação entre as telas.

•
HomeScreen.tsx: mostra a câmera normal e o botão Ler QR CODE.

•
ScannerScreen.tsx: solicita a permissão, lê os QR Codes e mostra o histórico.

•
README.md: apresenta as informações do projeto.

Como executar

1.
Abra o projeto no 

Expo Snack.

2.
Confirme que o projeto está usando o Expo SDK 54.

3.
Verifique se as dependências estão instaladas.

4.
Confirme se App.tsx está na raiz do projeto.

5.
Confirme se HomeScreen.tsx e ScannerScreen.tsx estão dentro da pasta screens.

6.
Abra o projeto no celular usando o Expo Go.

7.
Autorize o acesso à câmera.

8.
Toque em Ler QR CODE.

9.
Aponte a câmera para um QR Code.

O teste principal deve ser feito em um celular físico, pois o preview web pode não acessar a câmera corretamente.

Permissão da câmera

O aplicativo verifica a permissão antes de abrir a câmera. Quando o usuário ainda não autorizou, aparece um botão para solicitar o acesso. Se a permissão for negada ou bloqueada, o aplicativo mostra uma mensagem de orientação em vez de apresentar um erro.

Pergunta para a turma

Por que um QR Code ainda pode funcionar quando uma pequena parte está rasgada ou danificada?

Resposta esperada

Porque o QR Code possui correção de erros. Esse recurso permite recuperar parte das informações que foram perdidas ou danificadas.

Integrantes

•
Pedro Henrique Vieira de Brito

•
Lucas José Alves

•
Davi Henrique

•
Igor Cerqueira dos Santos

Informações do trabalho

Item
Informação
Tema
Câmera e leitura de QR Code
Plataforma
Expo Snack
Versão do Expo
SDK 54
Professor
Prof. Dionésio
Snack


Abrir projeto
GitHub


Abrir repositório


