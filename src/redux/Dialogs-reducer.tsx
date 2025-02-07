import React from "react";
import {StateType} from "./state";
import {addPostAC} from "./Profile-reducer";

export type AddDialogActionType = {
    type: 'ADD_DIALOG';
    postName: string;
};


export const DialogsReducer = (state: StateType, action: AddDialogActionType): StateType => {
    switch (action.type) {
        case 'ADD_DIALOG':
            const newName = {
                id: Date.now(),
                name: action.postName,
            };
            return {
                ...state,
                dialogPage: {
                    ...state.dialogPage,
                    dialogItems: [...state.dialogPage.dialogItems, newName],
                },
            };
        default:
            return state;
    }
};


/*

type AddDialogActionType = ReturnType<typeof addNameAC>;*/

type addDialogMassageType = ReturnType<typeof addDialogMessageAC>;

export const addNameAC = (postName: string):AddDialogActionType => ({
    type: 'ADD_DIALOG' as const,
    postName
});
export const addDialogMessageAC = (postMessage: string) => ({
    type: 'ADD_MESSAGE' as const, // 'ADD_POST' будет строковым литералом, а не просто строкой
    postMessage
});
