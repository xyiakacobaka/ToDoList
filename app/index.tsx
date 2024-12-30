import { StyleSheet, View } from "react-native";
import InputTask from "./Components/InputTask";
import ToDoTasks from "./Components/ToDoTasks";
import DoneTasks from "./Components/DoneTasks";

export default function Index() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputTask />
        <ToDoTasks />
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
