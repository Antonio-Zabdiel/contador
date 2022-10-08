import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const App=()=>{

  const[count,setCount]=useState(0);
  const contar=()=>setCount(prevCount=>prevCount+1)
  const descontar=()=>setCount(prevCount=>prevCount-1)

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn}
          onPress={contar}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <text style={styles.txtcount}>{count}</text>
        <View style={styles.count}></View>
        <TouchableOpacity style={styles.btn}
          onPress={descontar}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0AEEA",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    backgroundColor:"#25B38C",
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  btn: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AEEAAF",
    //borderWidth: 2,
    //borderStyle: "solid",
    //borderColor: "#25316D",
  },
  btnText: {
    fontSize: 40,
    textAlign: "center",
    color: "#000000",
  },
  count: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtcount: {
    alignItems: "center",
  },
});


export default App;