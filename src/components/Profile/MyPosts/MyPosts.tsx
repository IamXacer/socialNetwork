import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Profile} from "../Profile";
import {Post} from "./Post/Post";
import {addPost, StateType} from "../../../redux/state";

type MyPostsProps = {
    addPost:(postMassage:string)=>void;
    state: StateType; // Типизируем пропс как массив типа postsType
}
export const MyPosts = (props: MyPostsProps) => {
    const [postText, setPostText] = useState("");

    let postsElements = props.state.profilePage.posts.map(p =>
        <Post message={p.message} initialLikeCount={p.initialLikeCount}/>)

let handleTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.currentTarget.value)
}
let handleAddPost = ()=>{
        if(postText.trim()  !==''){
            props.addPost(postText)
            setPostText("")
        }
}
    return (
        <div>
            <Profile/>
            <div className={s.profileItems}>
                <textarea value={postText} onChange={handleTextChange }></textarea>
                <div>
                    <button onClick={handleAddPost }>AddPost</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>

        </div>

    )
}