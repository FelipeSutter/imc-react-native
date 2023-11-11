import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Main = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [diagnostico, setDiagnostico] = useState("");

  const calcularImc = () => {
    if (peso === "" || altura === "") {
      alert("Preencha os campos de peso e altura.");
    } else {
      const calculoImc =
        parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setImc(calculoImc.toFixed(2));

      if (calculoImc < 18.5) {
        setDiagnostico(`Voce está abaixo do peso.`);
      } else if (calculoImc < 24.9) {
        setDiagnostico(`Seu peso está normal.`);
      } else if (calculoImc < 29.9) {
        setDiagnostico(`Voce está em sobrepeso.`);
      } else {
        setDiagnostico(`Voce está obeso.`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerInput}>
          <Text> Peso</Text>
          <TextInput
            value={peso}
            placeholder="Digite seu peso"
            onChangeText={(text) => setPeso(text)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <Text> Altura</Text>

          <TextInput
            value={altura}
            placeholder="Digite sua altura"
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={calcularImc}>
        <Text style={{ color: "white" }}>Clique em mim</Text>
      </TouchableOpacity>

      {imc !== undefined && <Text>{imc}</Text>}
      {diagnostico !== "" && <Text>{diagnostico}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#6184a6",
  },
  containerInput: {},
  input: {
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "lightgray",
  },
  btn: {
    borderRadius: 10,
    backgroundColor: "#213053",
    padding: 10,
  },
});

export default Main;
