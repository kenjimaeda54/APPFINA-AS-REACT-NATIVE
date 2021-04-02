import React, { useState, createContext } from "react"


import firebase from "../services/conection"


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
   const [user, setUser] = useState(null);

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
            })
         })

   }

   return (
      //contemUsuario e uma variavel é !!user,estou dizendo que esta variavel e false ou verdadeira
      <AuthContext.Provider value={{ contemUsuario: !!user, Cadastro }} >

         {children}

      </AuthContext.Provider>

   );

}