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

// Инициализация состояния с типами, которые могут быть null
export let initialState: AuthStateType = {
  userId: null, // Устанавливаем null вместо пустой строки
  email: null,
  login: null,
  isAuth: false,
  logout: null,
  captchaUrl: null,
};

// Создаем слайс
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authUser(state, action: PayloadAction<AuthStateType>) {
      // Используем spread-оператор для обновления всех полей
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    },
  },
});

export const { authUser } = authSlice.actions;

// Редюсер
export default authSlice.reducer;
