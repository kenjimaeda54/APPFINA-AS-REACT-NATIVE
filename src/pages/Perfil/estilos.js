import styled from "styled-components/native";


export const Conteudo = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  background-color:#000;
`;

export const Titulo = styled.Text`
    width:100%; 
    text-align:center;    
    margin-top:100px;
    padding:20px;
    font-size:50px;
    color:white;
`;

export const BottaoLogar = styled.TouchableOpacity`
     width:90%;
     height:50px;
     background-color:green;
     padding:20px;
     border-radius:20px;
     margin:20px;

`;



export const BotaoDeslogar = styled.TouchableOpacity`
     width:90%;
     height:50px;
     background-color:red;
     padding:20px;
     border-radius:20px;
     margin:20px;
`;

export const Texto = styled.Text`
     font-size:20px;
     color:white;
     text-align:center;
     font-weight:bold;
     margin-top:-10px;
`;