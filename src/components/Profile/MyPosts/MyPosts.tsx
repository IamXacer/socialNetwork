import React, {ChangeEvent, useReducer, useState} from "react";
import s from './MyPosts.module.css'
import {Profile} from "../Profile";
import {Post} from "./Post/Post";
import { StateType} from "../../../redux/state";
import {addPostAC, ProfileReducer} from "../../../redux/Profile-reducer";

type MyPostsProps = {
   /* addPost:(postMassage:string)=>void;*/
    state: StateType; // Типизируем пропс как массив типа postsType
}

export const MyPosts = (props: MyPostsProps) => {
    // Используем useReducer для управления состоянием
    const [state, dispatch] = useReducer(ProfileReducer, props.state);

    const [postText, setPostText] = useState("");

    // Получаем список постов из состояния, которое обновляется через dispatch
    let postsElements = state.profilePage.posts.map(p =>
        <Post message={p.message} initialLikeCount={p.initialLikeCount} key={p.id} />
    );

    let handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value);
    };

    let handleAddPost = () => {
        if (postText.trim() !== '') {
            dispatch(addPostAC(postText)); // Отправляем экшен для добавления поста
            setPostText(""); // Очищаем текст после добавления
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