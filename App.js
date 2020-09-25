import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, TouchableHighlight, View } from 'react-native';
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
 
  return (
    <View style={styles.container}>
      <View style={styles.topo}><Text style={styles.textTopo}> {strCalc} </Text></View>

      <View style={styles.operadores}>
        <TouchableHighlight style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>+</Text></TouchableHighlight>
        <TouchableHighlight style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>-</Text></TouchableHighlight>
        <TouchableHighlight style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>/</Text></TouchableHighlight>
        <TouchableHighlight style={styles.textOpeBtn}><Text style={styles.textOpeTxt}>*</Text></TouchableHighlight>
      </View>

      <View>
          {
            numbers.map((e)=>{
              return (
                <Botao numbers={e}></Botao>
              )
            })
          }
      </View>
      <StatusBar hidden/>
    </View>
  );
}


