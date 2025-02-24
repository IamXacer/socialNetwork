import React, { ChangeEvent } from "react";
import s from './MyPosts.module.css';
import { Profile } from "../Profile";
import {PostsType} from "../../../redux/Profile-reducer";
import {Post} from "./Post/Post";
import {useSelector} from "react-redux";
import { RootState } from "../../../redux/redux-store";

// Тип для пропсов компонента MyPosts
type MyPostsType = {
    postText: string;
    posts: PostsType[]; // Добавляем тип для постов
    handleTextChange: (newText: string) => void; // Ожидаем строку, а не событие
    handleAddPost: (postText: string) => void; // Мы теперь ожидаем, что эта функция получит postText
};

export const MyPosts: React.FC<MyPostsType> = ({ postText, posts, handleTextChange, handleAddPost }) => {
    const profileState = useSelector((store: RootState) => store.profilePage.profilePage);
    const postsElements = profileState.posts.map(p => <Post message={p.message} initialLikeCount={p.initialLikeCount} key={p.id} />)
    return (
        <div>

            <Profile />
            <div className={s.profileItems}>
                <textarea value={postText} onChange={(e) => handleTextChange(e.target.value)}></textarea>
                <div>
                    <button onClick={() => handleAddPost(postText)}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};
