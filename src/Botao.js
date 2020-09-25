import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Botao = (props) => {
  return (
    <View>
      <Text>{props.numbers}</Text>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({})
