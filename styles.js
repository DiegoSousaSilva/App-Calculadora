import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000'
  },
  topo: {
    height: '16.6%',
    justifyContent:"center",
    padding: 10,
    paddingLeft:20,
    borderBottomWidth: 2,
    //borderBottomColor: '#fff'
  },
  textTopo:{
    fontSize: 24,
    color: '#fff'
  },
  operadores: {
    flexDirection: "row",
    height: '16.6%'
  },
  textOpeBtn:{
    width: '25%',
    backgroundColor: 'rgb(20,20,20)',
    justifyContent: "center",
    alignItems: "center",
  },
  textOpeTxt:{
    fontSize:24,
   // textAlign:"center",
    color: '#fff'
  },
  numbers:{
    height:'66.8%',
    flexDirection: "row",
    flexWrap:"wrap",
    borderTopColor:'#000',
    borderTopWidth:2
  },

})

export default styles;