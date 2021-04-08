import styled from "styled-components/native"



export const Conteudo = styled.TouchableOpacity`
    background-color: ${Platform.OS === 'ios'? 'Black' : 'transparent'};
    width:100%;
    height:100%;
    justify-content:flex-end;
    position: absolute;  
 
`;

export const Header = styled.View`
    justify-content:flex-end;
    align-items:flex-end;
    width:100%;
    padding:16px;
    background-color:white;
    border-bottom-width:1px ;
    border-color:grey;
`;
