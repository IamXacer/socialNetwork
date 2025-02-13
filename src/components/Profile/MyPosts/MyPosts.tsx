import React, { ChangeEvent, useReducer, useState } from "react";
import s from './MyPosts.module.css';
import { Profile } from "../Profile";

type MyPostsType={
    postText:string;
    handleTextChange:(e: ChangeEvent<HTMLTextAreaElement>)=>void;
    handleAddPost:()=>void;
}

export const MyPosts:React.FC<MyPostsType> = ({postText,handleTextChange,handleAddPost}) => {


    return (
        <div>
            <Profile />
            <div className={s.profileItems}>
                <textarea value={postText} onChange={handleTextChange}></textarea>
                <div>
                    <button onClick={handleAddPost}>Add Post</button>
                </div>
            </div>

        </div>
    );
};
