import React from "react";
import {FilterValuesType, TaskType} from "../../app/App";

type TodolistPropsType = {
    userName: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string) => void
    deleteTask: (taskId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
    changeTaskStatus: (taskId: string, status: boolean) => void
    changeFilter: (filter: FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType) => {
    console.log('todo')

    return <div>

    </div>

}