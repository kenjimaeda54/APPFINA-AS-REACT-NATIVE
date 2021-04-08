import React, { useContext, useState, useEffect } from 'react';
import { Conteudo, Texto, List, Title, AreaTitle } from "./estilos"
import firebase from "../../services/conection"
import { format, isBefore } from "date-fns"
import { Alert, TouchableOpacity, Platform } from "react-native";
import { Feather } from "@expo/vector-icons"


import Header from "../../components/header";
import { AuthContext } from "../../provider/provider";
import ListaTudo from "../../components/ListaTudo/";
import DatePicker from "../../components/DatePicker/"



export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  // para atulizar direto você utiliza o update nesse caso e useEffect((),[variavel dentro])
  useEffect(() => {

    async function carregarLista() {

      await firebase.database().ref('Usuarios').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo)
      });

      await firebase.database().ref('Historico')
        .child(uid)
        .orderByChild('date').equalTo(format(date, 'dd/MM/yyy'))
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
            return;
          })

        })
    }

    carregarLista()

  }, [date])


  function deleteItem(data) {   
     const formata = format(new Date(), 'dd/MM/yyy');
     const [diaAtual,mesAtual,anoAtual] = formata.split('/')
     const atual = (`${diaAtual}/${mesAtual}/${anoAtual}`)
     //data e o valor que recebo do array list{}
     if(data.data != atual ){
        alert('So é possivel excluir valores atuais');
     }else{


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

  function abrirCalendario() {
    setShow(true);

  }
  function fechar() {
    setShow(false)


  }

  const onChange = (dataAtual) => {
    setShow(Platform.OS === 'ios');
    setDate(dataAtual);

  }


  return (

    <Conteudo>

      <Header />

      <Texto>{user.nome}</Texto>
      <Texto>R${saldo.toFixed(2)}</Texto>

      <AreaTitle>

        <TouchableOpacity onPress={abrirCalendario}>

          <Feather name="calendar" size={23} color="white" />

        </TouchableOpacity>


        <Title>Ultimas transações</Title>

      </AreaTitle>

      <List

        showsVerticalScrollIndicator={false}
        data={historico}
        keyextractor={(item) => item.key}
        renderItem={({ item }) =>

          <ListaTudo data={item} deletaDados={deleteItem} />
        }

      />
      {show &&

        <DatePicker
          data={date}
          onClose={fechar}
          onChange={onChange}

        />

      }

    </Conteudo>
  );
}