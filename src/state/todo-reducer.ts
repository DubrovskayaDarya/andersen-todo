import {FilterValuesType, TodolistType} from "../app/App";

type ActionsType = ReturnType<typeof changeFilterAC>
    | ReturnType<typeof addUserNameAC>
    | ReturnType<typeof userAuthoriseAC>

const initialState: TodolistType = {
    userName: '',
    filter: 'active',
    isAuthorised: false,
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
                state.userName = action.userName;
            }
            return {...state}
        }
        case "USER-AUTH": {
            if (state) {
                state.isAuthorised = action.status;
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

export const addUserNameAC = (userName: string) => {
    return {type: 'ADD-USER-NAME', userName} as const
}

export const userAuthoriseAC = (status: boolean) => {
    return {type: 'USER-AUTH', status} as const
}
