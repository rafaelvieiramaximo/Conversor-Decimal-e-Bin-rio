import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [number, setInputValue] = React.useState('');
  const [bin, setBin] = React.useState('');
  const [dec, setDec] = React.useState('');
  const [binArray, setBinArray] = React.useState<string[]>([]);

  function handleChange(text: string) {
    setInputValue(text);

    if(text === ''){
      setBin('');
      setDec('');
      setBinArray([]);
    }
    const parsedBin = parseInt(text, 10);
    if (!isNaN(parsedBin)) {
      const binaryString = parsedBin.toString(2);
      setBin(parsedBin.toString(2));
      setBinArray(binaryString.split(''));
    } else {
      setBin('');
      setBinArray([]);
    }

    const parsedDec = parseInt(text, 2);
    if (!isNaN(parsedDec)) {
      setDec(parsedDec.toString());
    } else {
      setDec('');
    }
  }

  return (
      <View style={styles.container}>
        <View style={{ gap: 30 }}>
          <Text style={styles.title}>Conversor</Text>
          <Text style={styles.subtitle}>Insira o número aqui:</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Digite aqui"
            style={styles.inputenter}
            onChangeText={handleChange}
          ></TextInput>
          <TextInput
            value={bin}
            editable={false}
            style={styles.input}
            placeholder="Binário"
          ></TextInput>
          <TextInput
            value={dec}
            editable={false}
            style={styles.input}
            placeholder="Decimal"
          ></TextInput>
        </View>
        <View>
          <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'flex-end' }}>
            <View style={styles.tableview}><Text style={styles.texttable}>128</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>64</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>32</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>16</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>8</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>4</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>2</Text></View>
            <View style={styles.tableview}><Text style={styles.texttable}>1</Text></View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
              {binArray.map((digit, index) => (
                <View key={index} style={styles.tableview}>
                  <Text style={styles.texttable}>{digit}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    marginTop: 50,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 20,
  },
  inputenter: {
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
  input: {
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
  tableview: {
    borderWidth: 1,
    width: 50,
    height: 50,
  },
  texttable: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 12,
  },
});