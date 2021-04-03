import React from 'react';
import {
    AreaView,
    AreaTexto,
    ImagemTexto,
    AreaEntrada,
    EntradaTexto,
    AreaBotao,
    Botao,
    TextoBotao,
    Link,
}
    from "./styles.js"

import {useNavigation} from "@react-navigation/native"; 
import { useState,useContext } from 'react';

import {AuthContext} from "../../provider/provider"


export default function Logar() {
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('')
    const navigation = useNavigation();
    const {Logar} = useContext(AuthContext);


    function Acessar(){
       Logar(email,senha) 
    
    }
     
    return (

        <AreaView>

            <AreaTexto>

                <ImagemTexto source={require('../../assests/Logo.png')} />

                <AreaEntrada>

                    <EntradaTexto
                          
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(item)=>setEmail(item)}
                    />
                </AreaEntrada>

                <AreaEntrada>

                    <EntradaTexto
            
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={senha}
                        onChangeText={(item)=>setSenha(item)}
                    />

                </AreaEntrada>

            </AreaTexto>

            <AreaBotao>

                <Botao onPress={Acessar} >

                    <TextoBotao>Acessar</TextoBotao>

                </Botao>

                <Link onPress={()=>navigation.navigate("Criar")} >
                    
                    <TextoBotao>Criar uma conta</TextoBotao>
                    
                </Link>
              
            </AreaBotao>
            

        </AreaView>
    );
}