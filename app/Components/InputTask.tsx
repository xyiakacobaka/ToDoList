import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import SVGPlus from "../Assetes/SVGPlus";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

type GetProps = {
  TaskChange: any;
};

export default function InputTask(props: GetProps) {
  const [task, setTask] = useState("");

  const handleChange = (task: string) => {
    storeData(task);
    setTask("");
  };

  const storeData = async (value: string) => {
    try {
      const Task = { id: uuid.v4(), title: value };
      if (Task) {
        props.TaskChange({ id: uuid.v4(), title: value });
        await AsyncStorage.setItem(uuid.v4(), value);
      }
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        placeholderTextColor={"#777777"}
        value={task}
        onChange={(e) => setTask(e.nativeEvent["text"])}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChange(task)}
      >
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
