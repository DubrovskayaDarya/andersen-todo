import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./task-reducer";
import { todoReducer } from "./todo-reducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
