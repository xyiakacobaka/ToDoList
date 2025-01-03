import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export const loadTasks = createAsyncThunk("tasks/loadTasks", async () => {
  const keys = await AsyncStorage.getAllKeys();
  const tasks = await AsyncStorage.multiGet(keys);
  return tasks.map(([id, value]) => {
    const { title, done } = JSON.parse(value || "{}");
    return { id, title: title || "", done: done || false };
  });
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (title: string) => {
    const id = uuid.v4() as string;
    const task = { title, done: false }; // Создаем объект задачи
    await AsyncStorage.setItem(id, JSON.stringify(task)); // Сохраняем как JSON
    return { id, title, done: false };
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await AsyncStorage.removeItem(id);
    return id;
  }
);

export const toggleTaskDone = createAsyncThunk(
  "tasks/toggleTaskDone",
  async (id: string) => {
    const value = await AsyncStorage.getItem(id);
    if (value) {
      const task = JSON.parse(value);
      task.done = !task.done;
      await AsyncStorage.setItem(id, JSON.stringify(task));
      return { id, done: task.done };
    }
    throw new Error("Task not found");
  }
);
