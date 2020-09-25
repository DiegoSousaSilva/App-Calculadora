import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Botao = (props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={()=>props.logic()} style={styles.touch}>
        <Text style={styles.txt}>{props.numbers}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#000',
    borderWidth:1,
    borderColor:'#fff',
    width:'33.2%',
    height: '25%'
  },
  txt: {
    color: '#fff',
    //textAlign:"center",
    fontSize:24,

  },
  touch:{
    width:'100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  }
})
