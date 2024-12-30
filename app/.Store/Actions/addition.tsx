import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Task = {
  id: string;
  title: string;
};

export const additionTask = createAsyncThunk<Task | null, Task>(
  "task/Add",
  async (task: Task, { rejectWithValue }) => {
    try {
      // Сохраняем задачу в AsyncStorage
      await AsyncStorage.setItem(task.id, task.title);

      // Возвращаем задачу
      return task;
    } catch (error) {
      // В случае ошибки возвращаем null и передаем сообщение об ошибке
      return rejectWithValue("Failed to add task");
    }
  }
);
