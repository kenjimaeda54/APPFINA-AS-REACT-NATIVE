import styled from "styled-components/native";


export const Conteudo = styled.View`
   flex:1;
   flex-direction:column; 
   background-color:#000;
`;

export const Texto = styled.Text`
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
   margin-left:30px;
   padding:10px;
   font-size:30px;
   color:white;

`;



export const Lista = styled.FlatList`


`;

export const Title = styled.Text`
    width:50%;
    color:green;
    font-size:15px;
    font-style:italic;
    margin-left:40px;
    //conselho você deu um tamanho de 500px;
    //para aparecer a tela apaixo foi necessario subir -400px;
    //para resolver retirou o heigth
`;

export const AreaTitle = styled.View`
   flex-direction:row;
   margin-top:60px;
   margin-left:30px;
`;



export const List = styled.FlatList`
 width:90%;
 margin-left:20px;
 margin-top:20px;
 padding:30px;
 border-top-right-radius:15px;
 border-top-left-radius:15px;
 background-color:#ffff;

`;
