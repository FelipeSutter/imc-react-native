import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Main = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [diagnostico, setDiagnostico] = useState('');

  const calcularImc = () => {
    if (peso === '' || altura === '') {
      alert('Preencha os campos de peso e altura.');
    } else {
      const calculoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setImc(calculoImc.toFixed(2));

      if (calculoImc < 18.5) {
        setDiagnostico(`Voce está abaixo do peso. Seu IMC é:`);
      } else if (calculoImc < 24.9) {
        setDiagnostico(`Seu peso está normal. Seu IMC é: `);
      } else if (calculoImc < 29.9) {
        setDiagnostico(`Voce está em sobrepeso. Seu IMC é:`);
      } else {
        setDiagnostico(`Voce está obeso. Seu IMC é:`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={peso}
        placeholder="Digite seu peso"
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />
      <TextInput
        value={altura}
        placeholder="Digite sua altura"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
      />
      <Button title="Clique em mim" onPress={calcularImc} />
      
      {imc !== undefined && <Text>IMC: {imc}</Text>}
      {diagnostico!== "" &&<Text>Diagnostico:{diagnostico}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Main;
  