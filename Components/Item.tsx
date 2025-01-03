import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskDone } from "../store/Actions/TaskActions";
import { AppDispatch } from "../store/store";
import { TaskItem } from "../types/taskTypes";
import SVGDelete from "../assets/svg/SVGDelete";

export default function Item(item: TaskItem) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteTask(item.id));
  };

  const handleToggleTaskDone = () => {
    dispatch(toggleTaskDone(item.id));
  };

  return (
    <View
      style={[styles.container, { borderColor: item.containerBorderColor }]}
    >
      <Text style={[styles.textContainer, item.textStyle]}>{item.title}</Text>
      <View style={[styles.buttons]}>
        <TouchableOpacity onPress={handleToggleTaskDone}>
          <item.firstIcon color={item.buttonsFill} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <SVGDelete color={item.buttonsFill} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#15101C",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  textContainer: {
    color: "#9E78CF",
    width: "70%",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
});
