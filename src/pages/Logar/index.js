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
import { useState } from 'react';




export default function Logar() {
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('')
    const navigation = useNavigation();
     
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

                <Botao  >

                    <TextoBotao>Acessar</TextoBotao>

                </Botao>

                <Link onPress={()=>navigation.navigate("Criar")} >
                    
                    <TextoBotao>Criar uma conta</TextoBotao>
                    
                </Link>
              
            </AreaBotao>
            

        </AreaView>
    );
}