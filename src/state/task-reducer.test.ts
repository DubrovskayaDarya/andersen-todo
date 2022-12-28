import {TasksStateType} from "../app/App";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, tasksReducer} from "./task-reducer";

let startState: TasksStateType = [];

beforeEach(() => {
    startState = [
        {id: "1", title: "books", isDone: false},
        {id: "2", title: "cat", isDone: true},
        {id: "3", title: "milk", isDone: true},
    ]
});

test('task should be added to todolist', () => {
    const endState = tasksReducer(startState, addTaskAC('check smth'));

    expect(endState.length).toBe(4);
    expect(endState[0].title).toBe('check smth');
    expect(endState[3].title).toBe('milk');
});

test('exact task should be deleted', () => {
    const endState = tasksReducer(startState, deleteTaskAC('1'));

    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe('cat');
});

test('title of exact task should be changed', () => {
    const endState = tasksReducer(startState, changeTaskTitleAC('1', 'new title'));

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe('new title');
    expect(endState[2].title).toBe('milk');
});

test('status of exact task should be changed', () => {
    const endState = tasksReducer(startState, changeTaskStatusAC('1', true));

    expect(endState.length).toBe(3);
    expect(endState[0].isDone).toBe(true);
    expect(endState[2].isDone).toBe(true);
});