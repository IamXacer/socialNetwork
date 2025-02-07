import React from "react";
import {StateType} from "./state";

export type ActionType = AddPostActionType


export const ProfileReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: state.profilePage.posts.length + 1,
                message: action.postMessage,
                initialLikeCount: 0
            };
            return {
                ...state,
                profilePage: {
                    posts: [...state.profilePage.posts, newPost]
                }
            };
        default:
            return state;
    }
};
// Экшен-креатор для добавления поста
// Экшен-креатор для добавления поста
type AddPostActionType = ReturnType<typeof addPostAC>;

export const addPostAC = (postMessage: string) => ({
    type: 'ADD_POST' as const, // 'ADD_POST' будет строковым литералом, а не просто строкой
    postMessage
});

