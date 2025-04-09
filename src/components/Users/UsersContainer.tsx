import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/redux-store";
import {
  follow,
  setCurrenPage,
  setTotalUsersCount,
  setUsers,
  togleIsFetching,
  unfollow,
  UsersType,
} from "../../redux/Users-reducer";

import React from "react";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/Prealoader/Preloader";

type mapStateToPropsType = {
  users: UsersType[];
  pageSize: number;
  totalCount: number;
  currentPaga: number;
  isFetching: boolean;
};
type UsersPropsType = {
  users: UsersType[];
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrenPage: (page: number) => void;
  setTotalUsersCount: (UserCount: number) => void;
  pageSize: number;
  totalCount: number;
  currentPaga: number;
  isFetching: boolean;
  togleIsFetching: (isFetching: boolean) => void; // Добавили сюда
};

export class UsersAPIComponent extends React.Component<UsersPropsType, any> {
  componentDidMount() {
    this.props.togleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPaga}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.togleIsFetching(false);
        debugger;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChange = (currentPaga: number) => {
    this.props.setCurrenPage(currentPaga);
    this.props.togleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPaga}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.togleIsFetching(false);
        debugger;
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurrenPage={this.props.setCurrenPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPaga={this.props.currentPaga}
            onPageChange={this.onPageChange}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPaga: state.usersPage.currentPaga,
    isFetching: state.usersPage.isFetching,
  };
};
type mapDispatchToPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UsersType[]) => void; // Мы теперь ожидаем, что эта функция получит postText
  setCurrenPage: (page: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  togleIsFetching: (isFetching: boolean) => void;
};
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
  return {
    follow: (userId: string) => {
      console.log("followAc");
      dispatch(follow(userId)); // Используем экшн-креатор из слайса
    },
    unfollow: (userId: string) => {
      console.log("unfollowAc");
      dispatch(unfollow(userId)); // Используем экшн-креатор из слайса
    },
    setUsers: (users: UsersType[]) => {
      dispatch(setUsers(users)); // Используем экшн-креатор из слайса
    },
    setCurrenPage: (page: number) => {
      dispatch(setCurrenPage(page));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCount(totalCount));
    },
    togleIsFetching: (isFetching: boolean) => {
      dispatch(togleIsFetching(isFetching));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersAPIComponent);
export default UsersContainer;
