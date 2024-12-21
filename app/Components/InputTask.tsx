import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import SVGPlus from "../Assetes/SVGPlus";

export default function InputTask() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        placeholderTextColor={"#777777"}
      />
      <TouchableOpacity style={styles.button}>
        <SVGPlus />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 40,
    flexDirection: "row",
    gap: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "15%",
    height: "100%",
    backgroundColor: "#9E78CF",
    justifyContent: "center",
    borderRadius: 12,
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#9E78CF",
    borderRadius: 10,
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
