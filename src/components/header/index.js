import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Conteudo, Botao } from "./estilos"


export default function Header() {
    const navigation = useNavigation();
    return (

        <Conteudo>

            <Botao onPress={() => navigation.toggleDrawer()}  >

                <Feather name="list" size={35} color="white" />

            </Botao>


        </Conteudo>

    );
}