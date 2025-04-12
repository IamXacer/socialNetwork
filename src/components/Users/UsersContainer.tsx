import React from "react";
import axios from "axios";
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
  togleIsFetching: (isFetching: boolean) => void;
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
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (page: number) => {
    // Обновляем currentPage в Redux
    this.props.setCurrenPage(page);
    this.props.togleIsFetching(true);

    // Запрашиваем данные для выбранной страницы
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPaga} // Передаем currentPage сюда
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
    currentPaga: state.usersPage.currentPaga, // Обновляем currentPage из Redux
    isFetching: state.usersPage.isFetching,
  };
};

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrenPage,
  setTotalUsersCount,
  togleIsFetching,
})(UsersAPIComponent);
export default UsersContainer;
