import { combineReducers, legacy_createStore } from "redux";
import { ProfileReducer } from "./Profile-reducer";
import { DialogsReducer } from "./Dialogs-reducer";
import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Users-reducer";
import AuthReducer from "./auth-reducer";

// Правильно именуем части состояния, чтобы они были логичными
let rootReducer = combineReducers({
  profilePage: ProfileReducer, // Состояние профиля
  dialogPage: DialogsReducer, // Состояние диалогов
  usersPage: UsersReducer, // Состояние диалогов
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
