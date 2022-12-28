import React, {useCallback} from "react";
import {FilterValuesType, TaskType} from "../../app/App";
import {Task} from "../task/Task";
import {AddItem} from "../../common/components/addItem/AddItem";
import {Tab} from "../tabs/Tab";
import style from './Todo.module.css'

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

    const addTask = useCallback((title: string) => {
        props.addTask(title)
    }, [props.addTask])


    const onActiveClickHandler = useCallback(
        () => props.changeFilter('active'), [props.changeFilter])
    const onCompletedClickHandler = useCallback(
        () => props.changeFilter('completed'), [props.changeFilter])

    let tasksForTodolist = props.tasks

    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => !t.isDone)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone)
    }

    return <div className={style.todoContainer}>
        <AddItem addItem={addTask}/>
        <Tab filter={props.filter}
             onActive={onActiveClickHandler}
             onCompleted={onCompletedClickHandler}/>
        {tasksForTodolist.map(el => <Task key={el.id}
                                          task={el}
                                          changeTaskStatus={props.changeTaskStatus}
                                          changeTaskTitle={props.changeTaskTitle}
                                          deleteTask={props.deleteTask}/>)}
    </div>
}