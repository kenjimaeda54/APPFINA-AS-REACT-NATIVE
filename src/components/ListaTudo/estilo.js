import styled from "styled-components/native";


export const Conteudo = styled.View`
   margin:20px;
   padding:20px;
   width:100%;
`;
 
export const IconView = styled.View `
  flex-direction:row;
  /* sua propriedade no index.js e cor=data.tipo, então aqui chama cor  */
  background-color: ${props => props.cor === 'despesa'?'rgba(255,0,0,0.5 )' : 'rgba(60,179,113,0.7 	)'};
  border-radius:5px;
  width:35%;
  height:20px;
  align-items:center;
  margin-top:20px;

`;

export const Texto = styled.Text`
  margin-top:10px;
  font-size:30px;
  color:black;
  width:100%;
  height:100px;
 
`;

export const TextoIcon = styled.Text`
  font-size:15px;
  color:black;
  font-weight:bold;
  font-style:italic;

`;


