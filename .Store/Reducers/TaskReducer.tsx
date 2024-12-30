import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../.Types/taskTypes"; // Импортируем тип Task
import {
  loadTasks,
  addTask,
  deleteTask,
  toggleTaskDone,
} from "../Actions/TaskActions";

// Начальное состояние
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

// Создаем слайс
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Загрузка задач
    builder
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

      // Добавление задачи
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })

      // Удаление задачи
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })

      // Обновление статуса задачи (done)
      .addCase(
        toggleTaskDone.fulfilled,
        (state, action: PayloadAction<{ id: string; done: boolean }>) => {
          const task = state.tasks.find(
            (task) => task.id === action.payload.id
          );
          if (task) {
            task.done = action.payload.done;
          }
        }
      );
  },
});

// Экспортируем редюсер
export default taskSlice.reducer;
