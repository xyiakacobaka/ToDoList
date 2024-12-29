import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Item from "./Item";

type ItemData = {
  id: string;
  title: string | null;
};

type GetProps = {
  task: ItemData | undefined;
};

export default function ToDoTasks(props: GetProps) {
  const [DATA, setDATA] = useState<ItemData[]>([]);
  useEffect(() => {
    const getDATA = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const data = await AsyncStorage.multiGet(keys);
      const mas: ItemData[] = [];
      data.map((task) => {
        mas.push({ id: task[0], title: task[1] });
      });
      setDATA(mas);
    };
    getDATA();
  }, []);
  if (props.task != undefined) {
    DATA.push(props.task);
  }
  const renderItem = ({ item }: { item: ItemData }) => {
    return <Item id={item.id} title={item.title}></Item>;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks to do - {DATA.length}</Text>
      <FlatList
        data={DATA}
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
  },
  text: {
    color: "#fff",
  },
  container: {
    width: "90%",
    height: "30%",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
