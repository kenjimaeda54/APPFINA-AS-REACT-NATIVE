import React, { useContext, useState } from 'react';
import {
    AreaView,
    AreaTexto,
    AreaEntrada,
    EntradaTexto,
    AreaBotao,
    Botao,
    TextoBotao,
}
    from "./estilos.js"

import { AuthContext } from "../../provider/provider"
import { ActivityIndicator } from "react-native";


//por estar usando Context a função não espera retornar nada
//isto e fieto pelo useContext
export default function Criar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    const { Cadastro, lodingAuth } = useContext(AuthContext);

    function Criar() {
        Cadastro(nome, email, senha)
        //ficar atento em <Provider/> forma que a função esta recebendo 
        //deixar na mesma seguenci nome,email e senha
    }

    return (

        <AreaView>

            <AreaTexto>


                <AreaEntrada>

                    <EntradaTexto

                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={(item) => setNome(item)}
                    />
                </AreaEntrada>


                <AreaEntrada>

                    <EntradaTexto

                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(item) => setEmail(item)}
                    />
                </AreaEntrada>

                <AreaEntrada>

                    <EntradaTexto

                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={senha}
                        onChangeText={(item) => setSenha(item)}
                        secureTextEntry={true}
                    />

                </AreaEntrada>

            </AreaTexto>

            <AreaBotao>

                <Botao onPress={Criar} >
                    {
                        lodingAuth ? (

                            <ActivityIndicator size={15} color="black" />

                        ) : (

                            <TextoBotao>Criar conta</TextoBotao>
                        )

                    }

                </Botao>

            </AreaBotao>


        </AreaView>
    );
}