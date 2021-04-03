import React,{useContext} from 'react';
import { Conteudo,Titulo,BottaoLogar,BotaoDeslogar,Texto } from "./estilos"
import { AuthContext } from "../../provider/provider"
import { useNavigation  } from "@react-navigation/native"


export default function Perfil() {
  const{user,Deslogar} = useContext(AuthContext);
  const navigation = useNavigation();

  return (

    <Conteudo>

      <Titulo> {user &&  user.nome} </Titulo>

      <BottaoLogar onPress={()=>navigation.navigate("Novo")} >
      {/* Navaegação em navigation.navigate
          ("tem que ser o nome que esta nas suas rotas ou seja appRoutes.js") 
                                                  
      */}
   
        <Texto> Registrar Gastos </Texto>

      </BottaoLogar>

      <BotaoDeslogar onPress={()=> Deslogar()}  >
 
         <Texto> Deslogar </Texto>

      </BotaoDeslogar>

    </Conteudo>

  );
}