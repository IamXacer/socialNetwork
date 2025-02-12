import React, { ChangeEvent, useReducer, useState } from "react";
import s from './MyPosts.module.css';
import { Profile } from "../Profile";
import { Post } from "./Post/Post";
import { useSelector, useDispatch } from "react-redux"; // Импортируем useSelector и useDispatch
import {addPostAC, ProfileReducerType} from "../../../redux/Profile-reducer";
/*import { StateType } from "../../../redux/state";*/
import {RootState, store} from "../../../redux/redux-store"; // Импортируем тип для state

export const MyPosts = () => {
    // Используем useSelector для получения части состояния
    const profileState = useSelector((store: RootState) => store.profilePage.profilePage);
    const dispatch = useDispatch();

    const [postText, setPostText] = useState("");


    // Получаем список постов из состояния
    const postsElements = profileState.posts.map(p =>
        <Post message={p.message} initialLikeCount={p.initialLikeCount} key={p.id} />)


    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value);
    };


    const handleAddPost = () => {
        if (postText.trim() !== '') {
            dispatch(addPostAC(postText)); // отправляем экшен для добавления поста
            setPostText(""); // очищаем текст
        }
    };

    return (
        <div>
            <Profile />
            <div className={s.profileItems}>
                <textarea value={postText} onChange={handleTextChange}></textarea>
                <div>
                    <button onClick={handleAddPost}>Add Post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};
