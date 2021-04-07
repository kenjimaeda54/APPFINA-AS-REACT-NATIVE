import React from 'react';
import { Conteudo, IconView, Texto, TextoIcon } from "./estilo"
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native"


export default function ListaTudo({ data, deletaDados }) {
  return (
    <TouchableWithoutFeedback  onLongPress={()=> deletaDados(data)} >
      <Conteudo>

        <IconView cor={data.tipo}  >

          <Feather

            name={data.tipo == 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20}
            color={data.tipo == 'despesa' ? 'red' : 'green'}
          />
          <TextoIcon> {data.tipo}  </TextoIcon>

        </IconView>


        <Texto>R${data.saldo}</Texto>


      </Conteudo>
    </TouchableWithoutFeedback>
  );
}