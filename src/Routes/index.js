import React,{useContext} from 'react';
import {AuthContext} from "../provider/provider"

import AppRoutes from "../Routes/appRoutes"

import Auth from "./auth";

export default function Routes() {
    const{contemUsuario} = useContext(AuthContext);

    return (
      //estou recebendo da promise quando tem !!user a variavel ContemUsuario fica true;
      contemUsuario?  <AppRoutes/>   : <Auth/>

    );

}