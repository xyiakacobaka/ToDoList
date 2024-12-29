import { StyleSheet, View } from "react-native";
import InputTask from "./Components/InputTask";
import ToDoTasks from "./Components/ToDoTasks";
import DoneTasks from "./Components/DoneTasks";
import { useState } from "react";

type ItemData = {
  id: string;
  title: string | null;
};

export default function Index() {
  const [task, setTask] = useState<ItemData>();

  const handleChange = (task: ItemData) => {
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
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#1D1825",
    width: "80%",
    height: "70%",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
