import React, { useState, useContext } from 'react';
import { Conteudo, Entrada, Botao, Texto } from "./estilos"
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Header from "../../components/header";
import Picker from "../../components/Picker";
import firebase from "../../services/conection";
import { AuthContext } from "../../provider/provider"
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

export default function Novo() {
  const { user: usuario } = useContext(AuthContext);
  //user: usuario estou nomeando a variavel user para usuario,para evitar
  //duplacidade
  const navigation = useNavigation();
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);

  //inNaN vai garantir que sempre tem um valor dentro se não retorna false
  function enviar() {
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert("Digite algum valor ");
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Valor:${parseFloat(valor)}     Tipo:${tipo} `,
      [
        {
          text: 'Cancelar',
          style: 'cancelar'
        },
        {

          text: "Proseguir",
          onPress: () => adicionar(),
        }
      ]
    )

  }

  async function adicionar() {
    let uid = usuario.uid;

    //vou puxar a key sempre de um dado que vou criar
    let key = await firebase.database().ref('Historico').child(uid).push().key;
    await firebase.database().ref('Historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yy')
      //cuidado com a falta de imports
      //formatando a data garanto que sempre vai manter esse padrão

    })
    //atulaizar o saldo

    let user = await firebase.database().ref('Usuarios').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo)

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);
    })
      .catch((error) => {
        alert(error.code)
      })


    Keyboard.dismiss();
    navigation.navigate('Home')
    setValor('');
    setTipo(null);
  }



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >

      <Conteudo>

        <Header />

        <SafeAreaView>

          <Entrada

            placeholder="Coloque o valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditting={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(item) => setValor(item)}

          />

          <Picker setTipo={setTipo} tipo={tipo} />

          <Botao onPress={enviar}  >

            <Texto> Registrar </Texto>

          </Botao>


        </SafeAreaView>

      </Conteudo>

    </TouchableWithoutFeedback>

  );
}