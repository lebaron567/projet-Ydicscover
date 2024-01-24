import React from "react";
import { View,Text,  StyleSheet } from 'react-native';
import Home from './Home'

export default class About extends React.Component{

    render(){
        return(
            <View style ={style.view}>
                <Text style ={style.title}>a  </Text>
                <Text>SportTrainig est une aplis de sport qui propoje des exercise de sport
                </Text>
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
