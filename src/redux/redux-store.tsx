import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { ProfileReducer } from "./Profile-reducer";
import { DialogsReducer } from "./Dialogs-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Users-reducer";
import { authReducer } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
// Правильно именуем части состояния, чтобы они были логичными
let rootReducer = combineReducers({
  profilePage: ProfileReducer, // Состояние профиля
  dialogPage: DialogsReducer, // Состояние диалогов
  usersPage: userReducer, // Состояние диалогов
  auth: authReducer,
});

/*export const store = configureStore({
  reducer: rootReducer,
});*/
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  any
>;
export type AppStateType = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
