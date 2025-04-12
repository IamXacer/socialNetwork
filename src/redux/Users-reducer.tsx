import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Типы
export type UsersType = {
  id: string;
  followed: boolean;
  name: string;
  status: string;
  photoUrl?: string;
  location: UserLocation;
  photos: {
    small: string;
    large: string;
  };
};

export type InitialStateUserType = {
  users: UsersType[];
  pageSize: number;
  totalCount: number;
  currentPaga: number;
  isFetching: boolean;
};

type UserLocation = {
  city: string;
  country: string;
};

// Начальное состояние
const initialState: InitialStateUserType = {
  users: [],
  pageSize: 12,
  totalCount: 1,
  currentPaga: 4,
  isFetching: false,
};

// Создаем слайс
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    follow(state, action: PayloadAction<string>) {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.followed = false;
      }
    },
    unfollow(state, action: PayloadAction<string>) {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.followed = true;
      }
    },
    setUsers(state, action: PayloadAction<UsersType[]>) {
      state.users = action.payload;
    },
    setCurrenPage(state, action: PayloadAction<number>) {
      state.currentPaga = action.payload; // Просто обновляем состояние с текущей страницей
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      return { ...state, totalCount: action.payload };
    },
    togleIsFetching(state, action: PayloadAction<boolean>) {
      return { ...state, isFetching: action.payload };
    },
  },
});

// Экшн-креаторы
export const {
  follow,
  unfollow,
  setUsers,
  setCurrenPage,
  setTotalUsersCount,
  togleIsFetching,
} = usersSlice.actions;

// Редюсер
export default usersSlice.reducer;
