import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  
  const [number, setInputValue] = React.useState('');
  const [bin, setBin] = React.useState('');
  const [dec, setDec] = React.useState('');

  function handleChange(text: string) {
    setInputValue(text);

    const parsedBin = parseInt(text, 10);
   if (!isNaN(parsedBin)) {//Conferindo é um número
      setBin(parsedBin.toString(2));
    } else {
      setBin('');
    }

    // numero.toString();       // "10" (por padrão, base 10)
    // numero.toString(2);      // "1010" (binário)
    // numero.toString(8);      // "12"   (octal)
    // numero.toString(16);     // "a"    (hexadecimal)

    const parsedDec = parseInt(text, 2);
    if (!isNaN(parsedDec)) {//Conferindo é um número
      setDec(parsedDec.toString());
    } else {
      setDec('');
    }

  }

    
  
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Conversor</Text>
      <Text style={styles.subtitle}>Insira o número aqui:</Text>
      <TextInput 
        keyboardType='numeric'
        placeholder='Digite a ser convertido'
        style={styles.inputenter}
        onChangeText={handleChange}
        ></TextInput>
        <TextInput
        value={bin}
        editable={false}
        style={styles.input}
        placeholder='Binário'
        ></TextInput>
        <TextInput
        value={dec}
        editable={false}
        style={styles.input}
        placeholder='Decimal'>
        </TextInput>
    </View>

)

} 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  title: {
    fontSize: 40,
    marginTop: 50,
  },
  subtitle: {
    fontSize: 20,
  },
  inputenter:{
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  input:{
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  }
})
