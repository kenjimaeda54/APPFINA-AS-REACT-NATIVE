import React, { useContext, useState, useEffect } from 'react';
import { Conteudo, Texto, List, Title, } from "./estilos"
import firebase from "../../services/conection"
import { format, isPast } from "date-fns"

import Header from "../../components/header";
import { AuthContext } from "../../provider/provider";
import ListaTudo from "../../components/ListaTudo/";
import { Alert } from "react-native";


export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const { user } = useContext(AuthContext);

  const uid = user && user.uid;


  useEffect(() => {

    async function carregarLista() {

      await firebase.database().ref('Usuarios').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo)
      });

      await firebase.database().ref('Historico')
        .child(uid)
        .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistorico([])

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              saldo: childItem.val().valor,
              tipo: childItem.val().tipo,
              data: childItem.val().date,
            }
            setHistorico(oldArray => [...oldArray, list].reverse());

          })

        })
    }

    carregarLista()

  }, [])

  //com a função isPast garante que so vou excluir valores atuais
  function deleteItem(data) {
    if (isPast(new Date(data.data))) {
      alert("Somente valores atuais são possiveis excluir")
      return;
    }
    Alert.alert(
      'Cuidado',
      `Voce deseja excluir Tipo: ${data.tipo} é Valor:R$${data.saldo}`,
      [
        {
          text: 'Cancelar',
          style: 'Cancelar'
        },
        {
          text: 'Deletar',
          onPress: () => Deletar(data),

        }
      ]

    )

  }
   
  // estou recebendo a data se não funciona
   async function Deletar(data) {
    await firebase.database().ref('Historico').child(uid)
      .child(data.key).remove()
      // se der sucesso preciso atualizar o saldo
      .then(async () => {
        let saldoAtual = saldo;

        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.saldo) : 
        saldoAtual -= parseFloat(data.saldo)
        
        await firebase.database().ref('Usuarios').child(uid)
          .child('saldo').set(saldoAtual)
      })
      .catch((error) => {
        alert(error.code);

      })
  }



  return (

    <Conteudo>

      <Header />

      <Texto>{user.nome}</Texto>
      <Texto>R${saldo.toFixed(2)}</Texto>
      <Title>Ultimas transçações</Title>




      <List

        showsVerticalScrollIndicator={false}
        data={historico}
        keyextractor={(item) => item.key}
        renderItem={({ item }) =>

          <ListaTudo data={item} deletaDados={deleteItem} />
        }

      />

    </Conteudo>
  );
}