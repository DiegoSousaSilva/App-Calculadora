import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import Botao from './src/Botao';

import styles from './styles';

export default function App() {

const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);
const [signal, setSignal] = useState('');

const [strCalc, setStrcalc] = useState('0');

var numbers = [];

for (var i = 0; i <=9; i++){
  numbers.push(i);
}

const logic = (n) =>{
  if (signal == ''){
    setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
    setStrcalc(parseInt(firstNumber.toString() + n.toString()));
  }
  if((n=='+' || n=='-' || n=='/' || n=='*' ) && secondNumber == 0){
    setStrcalc(firstNumber.toString() + n);
    setSignal(n);
  }
  if (signal!= ''){
    setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
    setStrcalc(firstNumber+signal+parseInt(secondNumber.toString() + n.toString()));
  }
}
 
  return (
    <View style={styles.container}>
      <View style={styles.topo}><Text style={styles.textTopo}> {strCalc} </Text></View>

      <View style={styles.operadores}>
        <TouchableOpacity onPress={()=>logic('+')} style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logic('-')} style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logic('/')} style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logic('*')} style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logic('=')} style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>=</Text></TouchableOpacity>
      </View>

      <View style={styles.numbers}>
          {
            numbers.map((e)=>{
              return (
                <Botao logic={logic} numbers={e}></Botao>
              )
            })
          }
      </View>
      <StatusBar hidden/>
    </View>
  );
}


