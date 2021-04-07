import React from 'react';
import {  Picker as RNPickerSelect } from "@react-native-picker/picker";
//estou nomeando Picker como RNPickerSelect para evitar duplacidade
import { Conteudo } from "./style";


export default function Picker({ tipo,setTipo }) {
  return (

    <Conteudo>
       
      {/*Cuidado o Picker.item fica dentro de Picker ou seja a tag picker não
       tem fechamento <Picker conteudo > item</Picker>  */}  
         
      <RNPickerSelect

        style={{
          width: '100%'
        }}
        selectedValue={tipo}
        onValueChange={(item) => setTipo(item)}


      >
        <RNPickerSelect.Item label="Selecione opção" value="null" />
        <RNPickerSelect.Item label="Receita" value="receita" />
        <RNPickerSelect.Item label="Despesa" value="despesa" />


      </RNPickerSelect>

    </Conteudo>

  );
}