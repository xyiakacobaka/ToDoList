import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectAllTasks = (state: RootState) => state.taskVault.tasks;

export const selectTasksStatus = (state: RootState) => state.taskVault.status;

export const selectTasksError = (state: RootState) => state.taskVault.error;

export const selectTaskById = createSelector(
  [selectAllTasks, (state: RootState, taskId: string) => taskId],
  (tasks, taskId) => tasks.find((task) => task.id === taskId)
);

export const selectCompletedTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.done)
);

export const selectIncompleteTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => !task.done)
);
