import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../.Store/taskSlice";
import Item from "./Item";
import { AppDispatch, RootState } from "../.Store/store";

type Task = {
  id: string;
  title: string;
};

export default function ToDoTasks() {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.taskVault.tasks);
  const status = useSelector((state: RootState) => state.taskVault.status);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Task }) => {
    return <Item id={item.id} title={item.title} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks to do - {tasks.length}</Text>
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
  },
});
