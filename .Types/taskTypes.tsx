import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type TaskState = {
  tasks: Task[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type TaskItem = {
  id: string;
  title: string | null;
  containerBorderColor: ColorValue;
  buttonsFill: ColorValue;
  textStyle: StyleProp<TextStyle>;
  firstIcon: React.FC<SvgProps>;
};
