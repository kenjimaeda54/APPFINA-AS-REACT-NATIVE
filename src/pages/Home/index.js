import React,{useContext} from 'react';
import { View,Text, Button } from 'react-native';

import {AuthContext} from "../../provider/provider"

export default function Home() {
  const {user, Deslogar} = useContext(AuthContext);
 return (
   <View>
      <Text>{user.nome}</Text>
      <Text>{user.email}</Text>  
      <Text>{user.saldo}</Text>
      <Button
       onPress={()=>Deslogar()}
       style={{backgroundColor:'blue',width:'100%',height:70}}
       title="Deslogar"
      />
   </View>
  );
}