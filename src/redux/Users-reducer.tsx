import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
};

type UserLocation = {
    city: string;
    country: string;
};

// Начальное состояние
const initialState: InitialStateUserType = {
    users: [],
};

// Создаем слайс
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow(state, action: PayloadAction<string>) {
            const user = state.users.find(u => u.id === action.payload);
            if (user) {
                console.log('followSlice', action.payload);
                user.followed = false;
            }
        },
        unfollow(state, action: PayloadAction<string>) {
            const user = state.users.find(u => u.id === action.payload);
            if (user) {
                console.log('unfollowSlice', action.payload);
                user.followed = true;
            }
        },
        setUsers(state, action: PayloadAction<UsersType[]>) {
            state.users = action.payload;
        },
    },
});

// Экшн-креаторы
export const { follow, unfollow, setUsers } = usersSlice.actions;

// Редюсер
export default usersSlice.reducer;
