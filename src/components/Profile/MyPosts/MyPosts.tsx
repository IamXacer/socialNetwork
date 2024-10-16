import React from "react";
import s from './MyPosts.module.css'
import {Profile} from "../Profile";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <Profile/>
            <div className={s.profileItems}>
                <textarea></textarea>
                <div> <button>AddPost</button></div>
            </div>

          <Post message='Hi, how are you' initialLikeCount={1}/>
          <Post message='Ist my progect' initialLikeCount={1}/>
          <Post message='Hi' initialLikeCount={1}/>
        </div>

    )
}