import {FilterValuesType, TodolistType} from "../app/App";

type ActionsType = ReturnType<typeof changeFilterAC>
    | ReturnType<typeof addUserNameAC>

const initialState: TodolistType = {
    name: '',
    filter: 'active'
};

export const todoReducer = (state: TodolistType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            if (state) {
                state.filter = action.filter;
            }
            return {...state}
        }
        case "ADD-USER-NAME": {
            if (state) {
                state.name = action.name;
            }
            return {...state}
        }
        default:
            return state;
    }
}

//Action Creators
export const changeFilterAC = (filter: FilterValuesType) => {
    return {type: 'CHANGE-FILTER', filter} as const
}

export const addUserNameAC = (name: string) => {
    return {type: 'ADD-USER-NAME', name} as const
}