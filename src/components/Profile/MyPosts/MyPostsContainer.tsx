import React, { ChangeEvent } from "react";
import {useSelector, useDispatch, connect} from "react-redux"; // Импортируем useSelector и useDispatch
import { addPostAC, updatePostTextAC } from "../../../redux/Profile-reducer"; // Импортируем экшены
import {AppDispatch, RootState} from "../../../redux/redux-store"; // Импортируем RootState
import { Post } from "./Post/Post";
import { MyPosts } from "./MyPosts";

/*export const MyPostsContainer = () => {
    // Получаем состояние из Redux
    const profileState = useSelector((store: RootState) => store.profilePage.profilePage);
    const dispatch = useDispatch();

    const postsElements = profileState.posts.map(p => (
        <Post message={p.message} initialLikeCount={p.initialLikeCount} key={p.id} />
    ));

    // Обработчик изменения текста
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updatePostTextAC(e.currentTarget.value)); // Отправляем экшен для обновления текста
    };

    // Обработчик добавления поста
    const handleAddPost = () => {
        if (profileState.postText.trim() !== '') {
            dispatch(addPostAC(profileState.postText)); // Отправляем экшен для добавления поста
            dispatch(updatePostTextAC('')); // Очищаем текст после добавления поста
        }
    };

    return (
        <div>
            <MyPosts
                postText={profileState.postText} // Передаем текст из состояния Redux
                handleTextChange={handleTextChange}
                handleAddPost={handleAddPost}
            />
            <div>{postsElements}</div>
        </div>
    );
};*/



const mapStateToProps = (state: RootState) => {
    return {
        postText: state.profilePage.profilePage.postText, // Передаем text из состояния
        posts: state.profilePage.profilePage.posts // При необходимости передаем список постов
    };
};

// Тип для mapDispatchToProps
type mapDispatchToPropsType = {
    handleTextChange: (newText: string) => void;
    handleAddPost: (postText: string) => void; // Мы теперь ожидаем, что эта функция получит postText
};

// mapDispatchToProps для отправки экшенов
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        handleTextChange: (text: string) => dispatch(updatePostTextAC(text)), // Обновляем текст
        handleAddPost: (postText: string) => {
            if (postText.trim() !== '') {
                debugger
                dispatch(addPostAC(postText));
                debugger// Диспатчим экшен для добавления поста с настоящим текстом
                dispatch(updatePostTextAC('')); // Очищаем текст после добавления
            }
        }
    };
};

// Подключаем компонент MyPosts с переданными пропсами из Redux
const MyPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;