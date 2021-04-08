import React, { useState } from 'react';
import { TouchableOpacity, Platform, Text } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Conteudo, Header } from "./estilos"


export default function DatePicker({ data, onChange, onClose }) {
    const [dateNow, setDateNow] = useState(new Date(data));

    return (
       //aqui dentro e um jsx para acessar java scritp não precisa colocar ${}
        <Conteudo>
            {Platform.OS === 'ios' && (

                <Header>
                    <TouchableOpacity onPress={onClose}>

                        <Text>Fechar</Text>

                    </TouchableOpacity>

                </Header>

            )}

            <DateTimePicker

                value={dateNow}
                mode="date'"
                display="default"
                onChange={(event, selectedDate) => {
                    const dataAtual = selectedDate || dateNow
                    setDateNow(dataAtual)
                    onChange(dataAtual)
                }}
                style={{ backgroundColor: 'white' }}
            />


        </Conteudo>

    );
}