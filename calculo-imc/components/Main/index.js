import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState } from "react";

const Main = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState();
  const [resultado, setResultado] = useState();

  const calcularImc = () => {
    if (peso == "" || altura == "") {
      alert("Preencha os campos de peso e altura.");
    } else {
      let calculoImc = peso / (altura * altura);
      setImc(calculoImc);
    }
  };

  const MostrarResultado = () => <Text>{imc}</Text>;

  return (
    <View style={styles.container}>
      <TextInput
        value={peso}
        placeholder="Digite seu peso"
        onChangeText={(text) => setPeso(text)}
      ></TextInput>
      <TextInput
        value={altura}
        placeholder="Digite sua altura"
        onChangeText={(text) => setAltura(text)}
      ></TextInput>
      <Button title="Clique em mim" onPress={calcularImc}></Button>
      <FlatList data={imc} renderItem={MostrarResultado}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default Main;
