import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {FollowAC, setUsersAC, unFollowAC, UsersType} from "../../redux/Users-reducer";
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer";

type mapStateToPropsType = {
    users:UsersType[]

}
const mapStateToProps = (state:RootState):mapStateToPropsType => {
return {
    users:state.usersPage.users,
}
}
type mapDispatchToPropsType = {
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers:(users:UsersType[])=>void;// Мы теперь ожидаем, что эта функция получит postText
};
const mapDispatchToProps = (dispatch:AppDispatch):mapDispatchToPropsType => {
 return{
     follow:(userId:string) => {
         dispatch(FollowAC(userId))
     },
     unfollow:(userId:string) => {
         dispatch(unFollowAC(userId))
     },
     setUsers:(users:UsersType[]) => {
         dispatch(setUsersAC(users))
     }
 }
}

const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;