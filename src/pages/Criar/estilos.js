import styled from "styled-components/native";


export const AreaView = styled.View`
flex:1;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:#000; 

`;

export const AreaTexto = styled.View`
width:100%;
flex-direction:column;
justify-content:center;
 align-items:center;

`;

export const ImagemTexto = styled.Image`

`;

export const AreaEntrada = styled.View`
flex-direction:row;

`;

export const EntradaTexto = styled.TextInput.attrs({
    placeholderTextColor:'rgba(255,255,255,0.8)'
})`
 width:90%;
 margin:10px;
 border-radius:5px;
 background-color:#838B83;
 height:50px;
 font-size:20px;
 padding:10px;
 color:white;
 text-align:left;
`;

export const AreaBotao = styled.View`
width:100%;
flex-direction:column;
justify-content:center;
align-items:center;

`;

export const Botao = styled.TouchableOpacity`
width:90%;
background-color:green;
border-radius:5px;
height:50px;
text-align:center;
color:white;
align-items:center;
justify-content:center;
`;

export const TextoBotao = styled.Text`
font-size:20px;
color:white;
`;

