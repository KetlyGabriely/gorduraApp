import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [sexo, setSexo] = useState<"M" | "F">("M");
  const [resultado, setResultado] = useState<string>("");

  const parseNumero = (valor: string): number =>{
    return parseFloat(valor.replace(",","."));
  };

  const calcular = (): void =>{
    const p = parseNumero(peso);
    const a = parseNumero(altura);
    const i = parseNumero(idade);

    if (isNaN(p) || isNaN(a) || isNaN(i) || a <= 0){
      setResultado("Preencha os dados corretamente");
      return;
    }

    const imc = p / (a * a);

    const gordura = 
     sexo === "M"
      ? (1.2 * imc) + (0.23 * i) - 16.2
      : (1.2 * imc) + (0.23 * i) - 5.4;

    setResultado(`${gordura.toFixed(2)}%`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Gordura</Text>

      <TextInput
        placeholder="Peso (kg) Ex: 80"
        keyboardType="decimal-pad"
        value={peso}
        onChangeText={setPeso}
        style={styles.input}
      />

      <TextInput
       placeholder="Altura (m) Ex: 1,75"
       keyboardType="decimal-pad"
       value={altura}
       onChangeText={setAltura}
       style={styles.input}
      />

      <TextInput
       placeholder="Idade"
       keyboardType="numeric"
       value={idade}
       onChangeText={setIdade}
       style={styles.input}
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.buttonSexo,
            sexo === "M" && styles.buttonAtivo,
          ]}
          onPress={() => setSexo("M")}
        >
          <Text>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonSexo,
            sexo === "F" && styles.buttonAtivo,
          ]}
          onPress={() => setSexo ("F")}
        >
          <Text>Feminino</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.calcularBtn} onPress={calcular}>
        <Text style={styles.calcularText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== "" && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontSize: 22,
      marginBottom: 20,
      textAlign: "center",
      fontWeight:"bold",
    },
    input: {
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    buttonSexo: {
      flex: 1,
      padding: 10,
      marginHorizontal: 5,
      borderWidth: 1,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonAtivo: {
      backgroundColor: "#ddd",
    },
    calcularBtn: {
      backgroundColor: "#333",
      padding: 12,
      borderRadius: 10,
      alignItems:"center",
    },
    calcularText: {
      color: "#fff",
      fontWeight:"bold",
    },
    resultado: {
      marginTop: 20,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });
