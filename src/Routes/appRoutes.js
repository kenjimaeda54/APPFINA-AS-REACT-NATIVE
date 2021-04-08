import React from 'react';;
import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from "../pages/Home";
import CustomDrawer from "../../src/components/CutomDrawer"

import Novo from "../pages/Novo";
import Perfil from "../pages/Perfil"

export default function AppRoutes() {
 
    
    const Log = createDrawerNavigator();

    return (


        <Log.Navigator
           
        drawerContent={(props)=> <CustomDrawer {...props} /> }

            drawerStyle={{
                backgroundColor: '#000',
            }}
            drawerContentOptions={{
           
                labelStyle: {
                    fontWeight: 'bold',
                },
                inactiveBackgroundColor: '#000',
                activeBackgroundColor: '#00b94a',
                activeTintColor: '#fff',
                inactiveTintColor:'#dddd',
                itemStyle: {
                    marginVertical: 10,   
                },
                
            }}

                >

            <Log.Screen name="Home" component={Home} /> 
            <Log.Screen name="Novo" component={Novo} />
            <Log.Screen name="Perfil" component={Perfil} />   
        

        </ Log.Navigator>

            );

}