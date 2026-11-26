QR Code na Prática
Aplicativo educativo desenvolvido para o trabalho prático de React Native.
O projeto foi feito no Expo Snack, usando o Expo SDK 54 e o recurso nativo da câmera do celular.
Sobre o projeto
O aplicativo abre uma câmera normal na primeira tela e permite acessar um leitor de QR Code por meio de um botão.
A ideia do projeto é mostrar que um QR Code não é apenas uma imagem: ele é formado por quadrados que representam informações, como links ou mensagens.
Telas do aplicativo
1. Câmera normal
A primeira tela mostra a câmera traseira normalmente. Ela solicita a permissão da câmera e apresenta o botão Ler QR CODE. Ao tocar nesse botão, o usuário navega para a segunda tela.
2. Leitor de QR Code
A segunda tela usa a câmera do celular como leitor para:
solicitar a permissão da câmera;
detectar QR Codes;
mostrar o resultado encontrado;
permitir a leitura de outro código;
guardar um histórico dos códigos lidos durante a sessão.
A navegação entre as duas telas é feita com React Navigation.
Tecnologias utilizadas
React Native
TypeScript
Expo Snack
Expo SDK 54
expo-camera
@react-navigation/native
@react-navigation/native-stack
Dependências
No Snack, selecione o Expo SDK 54 e adicione estas dependências:
text
expo-camera@~17.0.7
@react-navigation/native@^7.0.0
@react-navigation/native-stack@^7.0.0
react-native-screens@~4.16.0
react-native-safe-area-context@~5.6.0
Se o Snack sugerir versões compatíveis automaticamente, aceite as versões indicadas para o SDK 54.
Estrutura dos arquivos
text
App.tsx
screens/
  HomeScreen.tsx
  ScannerScreen.tsx
README.md
Como executar
Abra o projeto no Expo Snack.
Confirme que o projeto está usando o Expo SDK 54.
Adicione as dependências listadas acima.
Verifique se o App.tsx está na raiz do projeto.
Verifique se HomeScreen.tsx e ScannerScreen.tsx estão dentro da pasta screens.
Abra o projeto no Expo Go usando um celular físico.
Autorize o acesso à câmera.
Na primeira tela, toque em Ler QR CODE.
Aponte a câmera para um QR Code.
O preview web pode não acessar a câmera corretamente. Por isso, o teste principal deve ser feito no celular com o Expo Go.
Permissão da câmera
O aplicativo verifica a permissão antes de abrir o leitor. Caso o usuário negue o acesso, uma mensagem é exibida orientando a permitir a câmera nas configurações do aparelho.
Pergunta para a turma
Por que um QR Code ainda pode funcionar quando uma pequena parte está rasgada ou danificada?
Resposta esperada: porque o QR Code possui correção de erros, que permite recuperar parte das informações perdidas.
Informações para a entrega
Os links do projeto são:
text
Snack: https://snack.expo.dev/@pedrohvbrito/qrcode
GitHub: https://github.com/PedroHenriqueVBrito/QRCODE
O repositório do GitHub contém o código-fonte e este README.
Integrantes
Pedro Henrique Vieira de Brito
Lucas José Alves
Davi Henrique
Igor Cerqueira dos Santos
Identificação do trabalho
text
Tema do aplicativo: Câmera e leitura de QR Code
Professor: Prof. Dionésio
