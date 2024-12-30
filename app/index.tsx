import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import InputTask from "./Components/InputTask";
import ToDoTasks from "./Components/ToDoTasks";
import DoneTasks from "./Components/DoneTasks";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  return (
    <View style={[styles.main]}>
      <StatusBar backgroundColor="#000" />
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
    height: 550,
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: "auto",
  },
});
