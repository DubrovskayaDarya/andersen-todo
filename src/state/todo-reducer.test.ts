import {addUserNameAC, changeFilterAC, todoReducer} from "./todo-reducer";
import {TodolistType} from "../app/App";

let startState: TodolistType = {
    userName: '',
    filter: 'active',
    isAuthorised: false,
};

beforeEach(() => {
    startState = {
        userName: 'Darya',
        filter: 'active',
        isAuthorised: false,
    }
});

test('user name should be added', () => {
    const endState = todoReducer(startState, addUserNameAC('Sasha'));

    expect(endState.userName).toBe('Sasha');
});

test('todos filter should be changed', () => {
    const endState = todoReducer(startState, changeFilterAC('completed'));

    expect(endState.filter).toBe('completed');
});