import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

type Task = {
  id: string;
  title: string;
};

type TaskState = {
  tasks: Task[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: TaskState = {
  tasks: [],
  status: "idle",
  error: null,
};

export const loadTasks = createAsyncThunk("tasks/loadTasks", async () => {
  const keys = await AsyncStorage.getAllKeys();
  const tasks = await AsyncStorage.multiGet(keys);
  return tasks.map(([id, title]) => ({ id, title: title || "" }));
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (title: string) => {
    const id = uuid.v4();
    await AsyncStorage.setItem(id, title);
    return { id, title };
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await AsyncStorage.removeItem(id);
    return id;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка загрузки задач
      .addCase(loadTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(loadTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load tasks";
      })
      // Обработка добавления задачи
      .addCase(addTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.status = "succeeded";
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add task";
      })
      // Обработка удаления задачи
      .addCase(deleteTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "succeeded";
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete task";
      });
  },
});

export default taskSlice.reducer;
