import React from "react";
import s from './MyPosts.module.css'
import {Profile} from "../Profile";
import {Post} from "./Post/Post";
<<<<<<< HEAD
import {posts, postsType} from "../../../redux/state";
type MyPostsProps = {
    posts: postsType[]; // Типизируем пропс как массив типа postsType
}
export const MyPosts = (props:MyPostsProps) => {

    let postsElements =props.posts.map(p=>
=======
import {stateType} from "../../../redux/state";
type MyPostsProps = {
    state:stateType,
}
export const MyPosts = (props:MyPostsProps) => {

    let postsElements =props.state.profilePage.posts.map(p=>
>>>>>>> 52988fd (Инициализация проекта и добавление файлов)
        <Post message={p.message} initialLikeCount={p.initialLikeCount}/>)

    return (
        <div>
            <Profile/>
            <div className={s.profileItems}>
                <textarea></textarea>
                <div> <button>AddPost</button></div>
            </div>
<div>
    {postsElements}
</div>

        </div>

    )
}