import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>Cálculo IMC - G4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#6184a6",
  },
});

export default Header;
