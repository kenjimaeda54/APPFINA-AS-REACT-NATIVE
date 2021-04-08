import React,{ useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItem, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { AuthContext } from "../../provider/provider"

export default function CutomDrawer(props) {
 const {user,Deslogar} = useContext(AuthContext);

    return (
        <DrawerContentScrollView>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>

                <Image source={require('../../assests/Logo.png')} />
                <Text style={{ color: 'white', fontSize: 20 }} >Seja bem vindo</Text>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >{user && user.nome}</Text>

            </View>

            <DrawerItemList {...props} />

            <DrawerItem
                {...props}
                label='Sair do app'
                inactiveBackgroundColor='red'
                onPress={Deslogar}
            />

        </DrawerContentScrollView>
    );
}