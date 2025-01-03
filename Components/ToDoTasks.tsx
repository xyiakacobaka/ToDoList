import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/Actions/TaskActions";
import { AppDispatch } from "../store/store";
import { Task } from "../types/taskTypes";
import { selectIncompleteTasks } from "../store/Selectors/TaskSelectors";
import Item from "./Item";
import SVGAccept from "../assets/svg/SVGAccept";

export default function ToDoTasks() {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(selectIncompleteTasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Task }) => {
    return (
      <Item
        id={item.id}
        title={item.title}
        textStyle={{}}
        firstIcon={SVGAccept}
        containerBorderColor={"#9E78CF"}
        buttonsFill={"#9E78CF"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Новые задачи - {tasks.length}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
    height: "40%",
  },
  text: {
    color: "#fff",
  },
  container: {
    width: "80%",
    flexGrow: 2,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 25,
  },
});
