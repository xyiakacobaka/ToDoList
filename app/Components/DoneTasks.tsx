import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../../.Store/Actions/TaskActions";
import { AppDispatch } from "../../.Store/store";
import { Task } from "../../.Types/taskTypes";
import { selectCompletedTasks } from "../../.Store/Selectors/TaskSelectors";
import Item from "./Item";
import SVGReturn from "../Assetes/SVGReturn";

export default function ToDoTasks() {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(selectCompletedTasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Task }) => {
    return (
      <Item
        id={item.id}
        title={item.title}
        textStyle={{ textDecorationLine: "line-through", color: "green" }}
        firstIcon={SVGReturn}
        containerBorderColor={"green"}
        buttonsFill={"green"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выполненные задачи - {tasks.length}</Text>
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
    height: 80,
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
