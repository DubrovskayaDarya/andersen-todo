import React, {useCallback} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "../state/task-reducer";
import {addUserNameAC} from "../state/todo-reducer";

export type FilterValuesType = 'active' | 'completed';
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = Array<TaskType>
export type TodolistType = {
    name: string
    filter: FilterValuesType
}


function App() {

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch();


    const addTask = useCallback(function (title: string) {
        dispatch(addTaskAC(title));
    }, []);

    const removeTask = useCallback(function (id: string) {
        dispatch(deleteTaskAC(id));
    }, []);

    const changeStatus = useCallback(function (id: string, isDone: boolean) {
        dispatch(changeTaskStatusAC(id, isDone));
    }, []);

    const changeTaskTitle = useCallback(function (id: string, title: string) {
        dispatch(changeTaskTitleAC(id, title));
    }, []);

    const addUserName = useCallback(function (name: string){
        dispatch(addUserNameAC(name))
    }, [])


    return (
        <div className="App">

        </div>
    );
}

export default App;
