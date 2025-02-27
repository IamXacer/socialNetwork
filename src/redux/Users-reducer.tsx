import React from "react";


export type UsersType = {
    id: string,
    followed: boolean
    name: string
    status: string
    photoUrl?: string
    location: UserLocation
    photos: {
        small: string,
        large: string
    },
}
export type InitialStateUserType = {
    users: UsersType[]
}

type UserLocation = {
    city: string
    country: string
}

// Начальное состояние
let initialState: InitialStateUserType = {
    users: [
        {
            id: '1', followed: false, name: "Alex", status: 'I am a Boss', location: {city: 'Neu-Ulm', country: 'Deutschland'},
            photos: {
                small: "",
                large: ""
            }
        },
        {id: '2', followed: true, name: "Daria", status: 'I am a Boss', location: {city: 'Neu-Ulm', country: 'Deutschland'},
            photos: {
                small: "",
                large: ""
            }
        },
        {
           id: '3', followed: false, name: "Dmitriy", status: 'I am a Boss', location: {city: 'Minsk', country: 'Belarus'},
            photos: {
                small: "",
                large: ""
            }
        },
        {
            id: '4', followed: true, name: "Andrey", status: 'Hallo', location: {city: 'Kiev', country: 'Ukrainia'},
            photos: {
                small: "",
                large: ""
            }
        },

        ]

};

type ActionTypes =
    ReturnType<typeof FollowAC>
    |ReturnType<typeof unFollowAC>
    |ReturnType<typeof setUsersAC>

export const FollowAC = (userId:string) => {
    return {type: 'FOLLOW', userId} as const
}
export const unFollowAC = (userId:string) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET_USERS', users} as const

}
// Редюсер
// Редюсер
export const UsersReducer = (state:InitialStateUserType = initialState, action: ActionTypes):InitialStateUserType  => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            };
            case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            };
        case "SET_USERS":
            return { ...state, users: action.users };
        default:
            return state;
    }
};


