import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "../state/task-reducer";
import {addUserNameAC, changeFilterAC, userAuthoriseAC} from "../state/todo-reducer";
import style from './App.module.css'
import {Todolist} from '../features/todo/Todolist';
import {UserPage} from "../features/userPage/UserPage";

export type FilterValuesType = 'active' | 'completed';
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = Array<TaskType>
export type TodolistType = {
    userName: string
    filter: FilterValuesType
    isAuthorised: boolean
}

function App() {

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);
    const isAuthorised = useSelector<AppRootStateType, boolean>(state => state.todo.isAuthorised);
    const userName = useSelector<AppRootStateType, string>(state => state.todo.userName);
    const filter = useSelector<AppRootStateType, FilterValuesType>(state => state.todo.filter);
    const dispatch = useDispatch();

    const addTask = useCallback(function (title: string) {
        dispatch(addTaskAC(title));
    }, []);

    const deleteTask = useCallback(function (id: string) {
        dispatch(deleteTaskAC(id));
    }, []);

    const changeStatus = useCallback(function (id: string, isDone: boolean) {
        dispatch(changeTaskStatusAC(id, isDone));
    }, []);

    const changeTaskTitle = useCallback(function (id: string, title: string) {
        dispatch(changeTaskTitleAC(id, title));
    }, []);

    const addUserName = useCallback(function (name: string) {
        dispatch(addUserNameAC(name))
    }, [])

    const changeFilter = useCallback(function (filter: FilterValuesType) {
        dispatch(changeFilterAC(filter));
    }, []);

    const userAuth = useCallback(function (status: boolean) {
        dispatch(userAuthoriseAC(status));
    }, []);


    return (
        <div className={style.app}>
            {isAuthorised
                ? <Todolist tasks={tasks}
                            addTask={addTask}
                            deleteTask={deleteTask}
                            changeTaskTitle={changeTaskTitle}
                            changeTaskStatus={changeStatus}
                            userName={userName}
                            filter={filter}
                            changeFilter={changeFilter}/>
                : <UserPage userName={userName}
                            userAuth={userAuth}
                            addUserName={addUserName}/>}
        </div>
    );
}

export default App;
