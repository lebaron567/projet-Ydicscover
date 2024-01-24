import React from "react";
import { View,Text,  StyleSheet } from 'react-native';
import Home from './Home'

export default class About extends React.Component{

    render(){
        return(
            <View style ={style.view}>
                <Text style ={style.title}>A propo de moi </Text>
                <Text>je m'appele emeric j'ai 21 ans</Text>
            </View>
             
        )
    }


}
const style = StyleSheet.create({
    view:{
        margin:20
    },
    title:{
        fontSize: 22,
        marginBottom:20
    }
})
