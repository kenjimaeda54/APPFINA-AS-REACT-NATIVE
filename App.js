import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";

import Routes from "./src/Routes/index"

import AuthProvider from "./src/provider/provider"


export default function App() {
  return (

    <NavigationContainer >

      <AuthProvider>

        {/*Statubar e a barra superior aonde fica o horario e tal*/}
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />

      </AuthProvider>

    </NavigationContainer>


  );
}


