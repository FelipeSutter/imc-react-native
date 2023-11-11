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
  const [botao, setBotao] = useState("Consulta");

  const calcularImc = () => {
    if (peso === "" || altura === "") {
      alert("Preencha os campos de peso e altura.");
    } else {
      const calculoImc =
        parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setImc(calculoImc.toFixed(2));

      setBotao("Novo Cálculo");

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
      <Text style={{ textAlign: "center", fontSize: 30 }}>
        Cálculo IMC - G4
      </Text>
      <View style={styles.containerInterno}>
        <View>
          <View style={styles.containerInput}>
            <Text style={styles.inputText}> Peso</Text>
            <TextInput
              value={peso}
              placeholder="Digite seu peso"
              onChangeText={(text) => setPeso(text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.inputText}> Altura</Text>

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
          <Text style={{ color: "white", textAlign: "center" }}>{botao}</Text>
        </TouchableOpacity>

        {imc !== undefined && (
          <Text style={{ fontSize: 30, marginTop: 10 }}>{imc}</Text>
        )}
        {diagnostico !== "" && (
          <Text style={{ fontSize: 20, marginTop: 10 }}>{diagnostico}</Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1f3f7",
    paddingTop: 70,
  },

  containerInterno: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#6184a6",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },

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

  inputText: {
    fontSize: 20,
  },

  btn: {
    borderRadius: 10,
    backgroundColor: "#213053",
    padding: 10,
    width: 150,
  },
});

export default Main;
