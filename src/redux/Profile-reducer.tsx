import React from "react";

// Тип для поста
 type PostsType = {
    id: number;
    message: string;
    initialLikeCount: number;
};

// Тип для состояния
 export type ProfileReducerType = {
    profilePage: {
        posts: PostsType[];
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
    },
};

// Экшен-креатор для добавления поста
export const addPostAC = (postMessage: string) => ({
    type: 'ADD_POST' as const, // Строковый литерал для type
    postMessage
});

// Тип экшена, который возвращает addPostAC
type AddPostActionType = ReturnType<typeof addPostAC>;

// Редюсер
export const ProfileReducer = (state: ProfileReducerType = initialState, action: AddPostActionType): ProfileReducerType => {
    switch (action.type) {
        case 'ADD_POST':
            debugger
            const newPost = {
                id: state.profilePage.posts.length + 1,
                message: action.postMessage,
                initialLikeCount: 0
            };
            return {
                ...state,
                profilePage: {
                    posts: [...state.profilePage.posts, newPost] // Добавляем новый пост
                }
            };
        default:
            return state;
    }
};
