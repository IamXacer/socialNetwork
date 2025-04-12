import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Profile } from "../Profile";
import { PostsType, type ProfileType } from "../../../redux/Profile-reducer";
import { Post } from "./Post/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-store";

// Тип для пропсов компонента MyPosts
type MyPostsType = {
  postText: string;
  posts: PostsType[];
  handleTextChange: (newText: string) => void;
  handleAddPost: (postText: string) => void;
  profile: any;
  profilePage?: unknown;
};

export const MyPosts: React.FC<MyPostsType> = ({
  postText,
  handleTextChange,
  handleAddPost,
  profile,
  profilePage,
}) => {
  const profileState = useSelector(
    (store: RootState) => store.profilePage.profilePage,
  );
  const postsElements = profileState.posts.map((p) => (
    <Post
      message={p.message}
      initialLikeCount={p.initialLikeCount}
      key={p.id}
    />
  ));
  return (
    <div>
      <div className={s.profile}>
        <Profile profile={profile} />
      </div>
      <div className={s.profileItems}>
        <textarea
          value={postText}
          onChange={(e) => handleTextChange(e.target.value)}
        ></textarea>
        <div>
          <button onClick={() => handleAddPost(postText)}>Add Post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};
