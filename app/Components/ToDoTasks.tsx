import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SVGAccept from "../Assetes/SVGAccept";
import SVGDelete from "../Assetes/SVGDelete";

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Itemaflkjhsgkjfhagkjfhgashjgfakjhsgfkjhagfkjhgasfhkjgashkjfg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d723",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d725",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d729",
    title: "Third Item",
  },
];

type ItemProps = {
  item: ItemData;
};

const Item = ({ item }: ItemProps) => (
  <View style={styles.container}>
    <Text style={styles.textContainer}>{item.title}</Text>
    <View style={styles.buttons}>
      <TouchableOpacity>
        <SVGAccept />
      </TouchableOpacity>
      <TouchableOpacity>
        <SVGDelete />
      </TouchableOpacity>
    </View>
  </View>
);

export default function ToDoTasks() {
  const renderItem = ({ item }: { item: ItemData }) => {
    return <Item item={item}></Item>;
  };

  return (
    <View style={{ height: "30%", gap: 15 }}>
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
    width: "90%",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#15101C",
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: "#9E78CF",
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
  text: {
    color: "#fff",
  },
});
