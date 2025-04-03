import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';
import axios from 'axios';
import Ionicons from "@expo/vector-icons/Ionicons";





export default function App() {
  const [celsius, setCelsius] = useState(null);
  const [fahr, setfahr] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [messageFahr, setMessageFahr] = useState("Preencha a Temperatura");
  // Coletor de temperatura



function fahrCalculator() {
  setfahr((celsius * 1.8 + 32).toFixed(0));
}

function validateImc () {
  if (celsius != null) {
    Keyboard.dismiss();
    fahrCalculator();
    setCelsius(null);
    setTextButton("Calcular Novamente");
    setMessageFahr("A temperatura em celsius é:");
    return; //return mata a função, e vai sair. Sem precisar do else
  }
  setfahr(null);
  setTextButton("Calcular");
  setMessageFahr("Preencha a temperatura");
}

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Celso Temperaturas</Text>
        </View>



      <View style={styles.content}>
        <Text style={styles.subTitle}>Conversor de Celsius para Fahrenheit</Text>
          
        <View> 
          <Text style={styles.label}>Temperatura em Celsius:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCelsius}
            value={celsius ?? ''}
            placeholder='Ex. 35'
            keyboardType='numeric'
          />
          
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={() => validateImc()}
        >
          <Ionicons name={'calculator-sharp'} size={24} color='#edf2f4'/>
          <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

         <View style={styles.fahrContainer}>
           <Text style={styles.fahrText}>{messageFahr}</Text>
           <Text style={styles.fahrResult}>{fahr}</Text>
           <Text style={styles.Fahrenheit}>Fahrenheit's</Text>
          </View>
          
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#7A77FC',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  titleText: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f'
  },
  subTitle: {
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    color: '#7A77FC',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    width: '100%',
    fontSize: 18,
    color: '#7A77FC',
    fontWeight: '',
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    color: '#180902',
    height: 45,
    width: '100%',
    borderColor: '#7A77FC',
    borderBottomWidth: 1.5,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 0,
  },
  button: {
    width:'100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A77FC',
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  fahrContainer: {
    color: '#',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  fahrText: {
    fontSize: 18,
    color: '#',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  fahrResult: {
    fontSize: 48,
    color: '#',
    fontWeight: 'bold',
  },
  Fahrenheit: {
    fontSize: 20,
    color: '#',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
