import React, { useContext } from 'react';
import { Conteudo, Titulo, BottaoLogar, BotaoDeslogar, Texto } from "./estilos"
import { AuthContext } from "../../provider/provider"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/header"
import { ActivityIndicator } from "react-native";

export default function Perfil() {
  const { user, Deslogar, lodingAuth} = useContext(AuthContext);
  const navigation = useNavigation();

  return (

    <Conteudo>

      <Header />

      <Titulo> {user && user.nome} </Titulo>

      <BottaoLogar onPress={() => navigation.navigate("Novo")} >
        {/* Navaegação em navigation.navigate
          ("tem que ser o nome que esta nas suas rotas ou seja appRoutes.js") 
                                                  
      */}

        <Texto> Registrar Valores </Texto>

      </BottaoLogar>

      <BotaoDeslogar onPress={() => Deslogar()}  >

        {
         lodingAuth ? (

            <ActivityIndicator size={15} color="black" />

          ) : (

            <Texto> Deslogar </Texto>
          )

        }

      </BotaoDeslogar>

    </Conteudo>

  );
}