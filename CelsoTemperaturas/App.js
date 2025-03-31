import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";


export default function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");

function imcCalculator() {
  // (peso / (altura * altura))
  setImc((weight / (height * height)).toFixed(2));
}

function validateImc () {
  if (weight != null && height != null) {
    Keyboard.dismiss();
    imcCalculator();
    setHeight(null);
    setWeight(null);
    setTextButton("Calcular Novamente");
    setMessageImc("Seu IMC é igual a:");
    return; //return mata a função, e vai sair. Sem precisar do else
  }
  setImc(null);
  setTextButton("Calcular");
  setMessageImc("Preencha o peso e a altura");
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
            onChangeText={setHeight}
            value={height ?? ''}
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

         <View style={styles.imcContainer}>
           <Text style={styles.imcText}>{messageImc}</Text>
           <Text style={styles.imcResult}>{imc}</Text>
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
  imcContainer: {
    color: '#',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imcText: {
    fontSize: 18,
    color: '#',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  imcResult: {
    fontSize: 48,
    color: '#',
    fontWeight: 'bold',

  },
});