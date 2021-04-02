import React from 'react';;
import { createStackNavigator } from "@react-navigation/stack";


import Home from "../pages/Home";

export default function AppRoutes() {
    const Log = createStackNavigator();

    return (


        <Log.Navigator>

            <Log.Screen name="Home" component={Home} 
            
            />

        </Log.Navigator>

    );

}