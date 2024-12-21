import { StyleSheet, Text, View } from "react-native";
import InputTask from "./Components/InputTask";
import ToDoTasks from "./Components/ToDoTasks";
import DoneTasks from "./Components/DoneTasks";
import { Dimensions } from "react-native";
import { useState } from "react";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export default function Index() {
  const [task, setTask] = useState("");

  const handleChange = (task: string) => {
    setTask(task);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputTask TaskChange={handleChange} />
        <ToDoTasks task={task} />
        <DoneTasks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0D0714",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "35%",
  },
  container: {
    backgroundColor: "#1D1825",
    width: Width * (4 / 5),
    height: Height * (70 / 100),
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
