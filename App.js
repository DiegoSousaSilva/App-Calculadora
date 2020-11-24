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
  if (n == '='){
    let result = 0;
    if(signal == "+"){
      result = firstNumber+secondNumber;
    }
    else if(signal == "-"){
      result = firstNumber-secondNumber;
    }
    else if(signal == "/"){
      result = firstNumber/secondNumber;
    }
    else if(signal == "*"){
      result = firstNumber*secondNumber;
    }
    setStrcalc(result);
    setSignal('');
    setFirstNumber(result);
    setSecondNumber(0);
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
            numbers.map((e, k)=>{
              return (
                <Botao key={k} logic={logic} numbers={e}></Botao>
              )
            })
          }
      </View>
      <StatusBar hidden/>
    </View>
  );
}


