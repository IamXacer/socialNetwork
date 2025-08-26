import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Типы
export type AuthStateType = {
  userId: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  logout: null;
  captchaUrl: null;
};
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: true,
  logout: null,
  captchaUrl: null,
};
export type ActionTypes = ReturnType<typeof setUserAuthDataAC>;

export const authReducer = (
  state: AuthStateType = initialState,
  action: ActionTypes,
): AuthStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      debugger;
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setUserAuthDataAC = (userId: null, email: null, login: null) => {
  return { type: "SET_USER_DATA", data: { userId, email, login } } as const;
};
