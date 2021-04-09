# APP finanças em React Native,usei Expo para simular

### Dependencias do projeto
# npm install @react-navigation/native
# npm install @react-navigation/stack
# npm install @react-navigation/drawer
# npm install date-fns --save
# npm install --save styled-components
# npm install --save firebase
# npm i @react-native-community/async-storage
npm install @react-native-community/datetimepicker --save
### Recursos utilizado
- Para formatar datas e futuramente comparar  foi usado o  date-fns, com essa biblioteca é mais facil o procedimento,
documentação https://date-fns.org/
- Navegação utlizei stack e drawer. O efeito drawer é o famosso burguer, bastante interesante sua função,foi totalmente customizado
na aplicação. Para utilizar de forma correta no projeto é necesasrio  importar 'react-native-gesture-handler'; Documentação https://reactnavigation.org/docs/getting-started
- Utilizei nos estilos o  styled-component, com essa biblioteca manipulei os estilos e a props do JSX com css
- Toda aplicação CRUD foi realizado com firebase
- Utilizei o async storage , para garantir localmente algumas propriedades salvas,documentação https://www.mindbowser.com/asyncstorage-in-react-native/
- Para passar as propriedades comuns entre as telas foi usado a Api context, com essa biblioteca automatizo essa função
- Para os icones foi utlizado  biblioteca padrão da expo,sem necessidade de instalar biblioteca,vector-icons. https://docs.expo.io/guides/icons/#expovector-icons
- Para fazer efeito de moldal filtragem de datas,utilizei biblioteca DateTimepicker , documentação https://github.com/react-native-datetimepicker/datetimepicker
- Ciclo de vida usado foi o useEfect , semelhante ao componentDidUptade, com esse ciclo de vida foi possivel atualizar a lista a cada data.
- Todo o projeto foi usado Hooks 
