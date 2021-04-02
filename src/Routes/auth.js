import React from 'react';

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";


import Logar from "../pages/Logar";
import Criar from "../pages/Criar"

export default function Auth() {
    const Auth = createStackNavigator();

    return (


        <Auth.Navigator>

            <Auth.Screen
                name="Logar"
                component={Logar}
                options={{ headerShown: false }}

            />

            <Auth.Screen 
                 name="Criar"
                 component={Criar}
                 options={{
                    headerStyle:{
                        backgroundColor:'#000',
                        borderBottomWidth:1,
                        borderBottomColor:"green",
                    },
                    headerTintColor:'#FFF',
                    headerBackTitleVisible:false,
                    headerTitle:'Voltar',
    
                 }}
            
            />              

        </Auth.Navigator>

    );

}