import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  
  const [number, setInputValue] = React.useState('');
  const [bin, setBin] = React.useState('');

  function handleChange(text: string) {
    setInputValue(text);

    const parsed = parseInt(text, 10);
    if (!isNaN(parsed)) {
      setBin(parsed.toString(2));
    } else {
      setBin('');
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
        ></TextInput>
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
  }
})
