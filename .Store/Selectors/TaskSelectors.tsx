import { RootState } from "../store"; // Импортируем тип RootState

// Селектор для получения всех задач
export const selectAllTasks = (state: RootState) => state.taskVault.tasks;

// Селектор для получения статуса загрузки
export const selectTasksStatus = (state: RootState) => state.taskVault.status;

// Селектор для получения ошибки
export const selectTasksError = (state: RootState) => state.taskVault.error;

// Селектор для получения задачи по ID
export const selectTaskById = (state: RootState, taskId: string) =>
  state.taskVault.tasks.find((task) => task.id === taskId);

// Селектор для получения выполненных задач
export const selectCompletedTasks = (state: RootState) =>
  state.taskVault.tasks.filter((task) => task.done);

// Селектор для получения невыполненных задач
export const selectIncompleteTasks = (state: RootState) =>
  state.taskVault.tasks.filter((task) => !task.done);
