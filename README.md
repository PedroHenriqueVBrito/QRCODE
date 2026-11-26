QR Code na Prática

Aplicativo educativo desenvolvido para o trabalho prático de React Native.

O projeto foi feito no Expo Snack, usando o Expo SDK 54 e o recurso nativo da câmera do celular.

Sobre o projeto

O aplicativo explica, de forma simples, como um QR Code funciona e permite testar a leitura de códigos usando a câmera do aparelho.

A ideia do projeto é mostrar que um QR Code não é apenas uma imagem: ele é formado por quadrados que representam informações, como links ou mensagens.

Telas do aplicativo

1. QR Code na prática

A primeira tela apresenta uma explicação curta sobre:

•
o que é um QR Code;

•
como os quadrados representam informações;

•
para que servem os três quadrados maiores nos cantos;

•
por que o código pode continuar funcionando mesmo com uma pequena parte danificada;

•
uma pergunta para verificar o entendimento da turma.

2. Leitor de QR Code

A segunda tela usa a câmera do celular para:

•
solicitar a permissão da câmera;

•
detectar QR Codes;

•
mostrar o resultado encontrado;

•
permitir a leitura de outro código;

•
guardar um histórico dos códigos lidos durante a sessão.

A navegação entre as duas telas é feita com React Navigation.

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
expo-camera

•
@react-navigation/native

•
@react-navigation/native-stack

Dependências

No Snack, selecione o Expo SDK 54 e adicione estas dependências:

Plain Text


expo-camera@~17.0.7
@react-navigation/native@^7.0.0
@react-navigation/native-stack@^7.0.0
react-native-screens@~4.16.0
react-native-safe-area-context@~5.6.0



Se o Snack sugerir versões compatíveis automaticamente, aceite as versões indicadas para o SDK 54.

Estrutura dos arquivos

Plain Text


App.tsx
screens/
  HomeScreen.tsx
  ScannerScreen.tsx
README.md



Como executar

1.
Abra o projeto no Expo Snack.

2.
Confirme que o projeto está usando o Expo SDK 54.

3.
Adicione as dependências listadas acima.

4.
Verifique se o App.tsx está na raiz do projeto.

5.
Verifique se HomeScreen.tsx e ScannerScreen.tsx estão dentro da pasta screens.

6.
Abra o projeto no Expo Go usando um celular físico.

7.
Autorize o acesso à câmera.

8.
Acesse a tela do leitor e aponte a câmera para um QR Code.

O preview web pode não acessar a câmera corretamente. Por isso, o teste principal deve ser feito no celular com o Expo Go.

Permissão da câmera

O aplicativo verifica a permissão antes de abrir o leitor. Caso o usuário negue o acesso, uma mensagem é exibida orientando a permitir a câmera nas configurações do aparelho.

Pergunta para a turma

Por que um QR Code ainda pode funcionar quando uma pequena parte está rasgada ou danificada?

Resposta esperada: porque o QR Code possui correção de erros, que permite recuperar parte das informações perdidas.

Informações para a entrega

Antes de enviar o trabalho, preencha e teste os dois links abaixo:

Plain Text


Snack: https://snack.expo.dev/@pedrohvbrito/qrcode
GitHub: https://github.com/PedroHenriqueVBrito/QRCODE


Integrantes: Pedro Henrique Vieira de Brito, Lucas José alves, Davi Henrique e Igor Cerqueira dos Santos
Tema do app: Câmera e Leitura de QRCODE

