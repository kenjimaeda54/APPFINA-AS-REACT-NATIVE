import React, { useState, createContext,useEffect } from "react"

import AsyncStorage from '@react-native-community/async-storage';
import firebase from "../services/conection"


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
   const [user, setUser] = useState(null);
   const [loading,setLoading] = useState(true);


   useEffect(()=>{
     
      async function LoadStorage(){
       
       const storage = await AsyncStorage.getItem('Auth_User')
//vamos converter em parse() nossa data,  agora esta na variavel storage
//JSON.parse(sotrage),essa é varivarel que esta armazena  dentro
//de Auth_ User          
         if(storage){       
           setUser(JSON.parse(storage));
           setLoading(false);           
           return;
         }
      setLoading(false);   
      }
   LoadStorage();

   },[])

   async function Logar(email,senha){
     await firebase.auth().signInWithEmailAndPassword(email,senha)
     .then( async (value)=>{
          let uid = value.user.uid;
          await firebase.database().ref('Usuarios').child(uid).once('value')
          .then((snapshot)=>{
            let data ={
               nome: snapshot.val().nome,
               email: value.user.email,
            }
            setUser(data); 
            StorageUser(data);
            return;
              
          }) 
         
     })
     .catch((error)=>{
       alert(`Codigo do erro ${error.code}`)
     })

   }

   async function Cadastro(nome, email, senha) {
      await firebase.auth().createUserWithEmailAndPassword(email,senha)
         .then(async (value) => {
            let uid = value.user.uid
            await firebase.database().ref('Usuarios').child(uid).set({
               nome: nome,
               saldo: 0,
            }).then(() => {
               let data = {
                  uid: uid,
                  nome: nome,
                  email: value.user.email
               }
               setUser(data);
               StorageUser(data);
               return;
            })
         })
         .catch((error)=>{
            alert(`Cogido de erro ${error.code}`)
         })

   }

   async function StorageUser(data){
      await AsyncStorage.setItem('Auth_User', JSON.stringify(data));
   }

   async function Deslogar(){
      await firebase.auth().signOut();
      await AsyncStorage.clear()
      .then(()=>{
         setUser(null);
      })
      return;
   }

   return (
      //contemUsuario e uma variavel é !!user,estou dizendo que esta variavel e false ou verdadeira
      <AuthContext.Provider value={{ contemUsuario: !!user,user,loading,  Cadastro,Logar,Deslogar }} >

         {children}

      </AuthContext.Provider>

   );

}