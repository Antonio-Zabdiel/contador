import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <View style={styles.count}></View>
        <TouchableOpacity style={styles.btn}>
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
});