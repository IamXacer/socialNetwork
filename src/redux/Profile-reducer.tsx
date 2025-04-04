import React from "react";

// Тип для поста
 export type PostsType = {
    id: number;
    message: string;
    initialLikeCount: number;
};

// Тип для состояния
 export type ProfileReducerType = {
    profilePage: {
        posts: PostsType[];
        postText: string;
    };
};

// Начальное состояние
let initialState: ProfileReducerType = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you", initialLikeCount: 112 },
            { id: 2, message: "It's my project", initialLikeCount: 2 },
            { id: 3, message: "Hi", initialLikeCount: 5 },
        ],
        postText: '', // Инициализация поля postText
    },
};


// Экшен-креатор для добавления поста
export const addPostAC = (postMessage: string) => ({
    type: 'ADD_POST' as const, // Строковый литерал для type
    postMessage
});
export const updatePostTextAC = (text: string) => ({
    type: 'UPDATE_POST_TEXT' as const,
    text
});


type ActionTypes =
    ReturnType<typeof addPostAC>
    |ReturnType<typeof updatePostTextAC>

// Редюсер
// Редюсер
export const ProfileReducer = (state: ProfileReducerType = initialState, action: ActionTypes): ProfileReducerType => {
    switch (action.type) {
        case 'ADD_POST':
            debugger
            const newPost = {
                id:state.profilePage.posts[0].id,
                message:action.postMessage,
                initialLikeCount:0
            };
            return {
                ...state,
                profilePage:{
                        posts:[...state.profilePage.posts,newPost],
                    postText:''
                }
            }
        case 'UPDATE_POST_TEXT':
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    postText: action.text // Обновляем состояние текста
                }
            };
        default:
            return state;
    }
};


