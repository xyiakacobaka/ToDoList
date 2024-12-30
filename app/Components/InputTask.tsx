import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../.Store/Actions/TaskActions";
import SVGPlus from "../Assetes/SVGPlus";
import { AppDispatch } from "../../.Store/store";

export default function InputTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle.trim()));
      setTaskTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        placeholderTextColor={"#777777"}
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <SVGPlus />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexGrow: 1,
    flexDirection: "row",
    gap: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "15%",
    height: "40%",
    backgroundColor: "#9E78CF",
    justifyContent: "center",
    borderRadius: 12,
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: "40%",
    borderWidth: 1,
    borderColor: "#9E78CF",
    borderRadius: 10,
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
