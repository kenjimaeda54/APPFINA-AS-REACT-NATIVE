import styled from "styled-components/native";

export const Conteudo = styled.View`
 flex:1;
 background-color:#000;
 
`;



export const Entrada = styled.TextInput.attrs({
  placeholderTextColor:'rgba(255,255,255,0.8)'

}) `
   
  flex-direction:column; 
  text-align:left;
  font-size:16px;
  width:90%;
  height:80px;
  color:black;
  background-color:#ddd;
  border-bottom-left-radius:15px;
  border-top-right-radius:15px;
  margin:20px;
`;



export const Botao= styled.TouchableOpacity `
   text-align:center;
   width:90%;
   height:50px;
   background-color:green;
   margin:20px;
   justify-content:center;
    
`;

export const Texto = styled.Text`
   text-align:center;
   color: rgba(248,248,255,0.8); 
   font-size:35px;
`;



