import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SVGAccept from "../Assetes/SVGAccept";
import SVGDelete from "../Assetes/SVGDelete";

type ItemData = {
  id: string;
  title: string | null;
};

export default function Item(item: ItemData) {
  return (
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
});
