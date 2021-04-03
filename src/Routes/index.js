import React, { useContext } from 'react';
import { AuthContext } from "../provider/provider"
import { View, ActivityIndicator } from "react-native";

import AppRoutes from "../Routes/appRoutes"

import Auth from "./auth";

export default function Routes() {
  const { contemUsuario, loading } = useContext(AuthContext);

  if(loading) {
    return (

      <View style={{
        flex: 1, backgroundColor: '#000', justifyContent: 'center',
        alignItems:'center', flexDirection: 'row',margin:'auto',padding:'auto'
      }}>
        <ActivityIndicator size='large' color='blue' />
      </View>

    );

  }


  return (
    //estou recebendo da promise quando tem !!user a variavel ContemUsuario fica true;
    contemUsuario ? <AppRoutes /> : <Auth />

  );

}