import { TasksStateType, TaskType } from "../app/App";
import { v1 } from "uuid";

type ActionsType =
  | ReturnType<typeof addTaskAC>
  | ReturnType<typeof deleteTaskAC>
  | ReturnType<typeof changeTaskStatusAC>
  | ReturnType<typeof changeTaskTitleAC>;

const initialState: TasksStateType = [];

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "ADD-TASK": {
      const newTask: TaskType = {
        id: v1(),
        title: action.title,
        isDone: false,
      };
      return [newTask, ...state];
    }
    case "REMOVE-TASK": {
      const stateCopy = [...state];
      return stateCopy.filter((t) => t.id != action.taskId);
    }
    case "CHANGE-TASK-STATUS": {
      const stateCopy = [...state];
      return stateCopy.map((t) =>
        t.id === action.taskId ? { ...t, isDone: action.isDone } : t
      );
    }
    case "CHANGE-TASK-TITLE": {
      const stateCopy = [...state];
      return stateCopy.map((t) =>
        t.id === action.taskId ? { ...t, title: action.title } : t
      );
    }
    default:
      return state;
  }
};

//Action Creators
export const addTaskAC = (title: string) => {
  return { type: "ADD-TASK", title } as const;
};

export const deleteTaskAC = (taskId: string) => {
  return { type: "REMOVE-TASK", taskId: taskId } as const;
};

export const changeTaskStatusAC = (taskId: string, isDone: boolean) => {
  return { type: "CHANGE-TASK-STATUS", isDone, taskId } as const;
};

export const changeTaskTitleAC = (taskId: string, title: string) => {
  return { type: "CHANGE-TASK-TITLE", title, taskId } as const;
};
