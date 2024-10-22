import React from "react";
import s from './MyPosts.module.css'
import {Profile} from "../Profile";
import {Post} from "./Post/Post";
import {posts, postsType} from "../../../redux/state";
type MyPostsProps = {
    posts: postsType[]; // Типизируем пропс как массив типа postsType
}
export const MyPosts = (props:MyPostsProps) => {

    let postsElements =props.posts.map(p=>
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