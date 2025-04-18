import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/redux-store";
import {
  FollowAC,
  setCurrentAC,
  setUsersAC,
  setUsersTotalCountAC,
  ToggleFeathingAC,
  ToggleFeathingProherssAC,
  ufollowAC,
  UsersType,
} from "../../redux/Users-reducer";
import { Users } from "./Users";
import { Preloader } from "../common/Prealoader/Preloader";
import { usersAPI } from "../../api/api";

export type SuperUserContainerType = mapStateToPropsType &
  mapDispatchToPropsType;

type mapStateToPropsType = {
  users: UsersType[];
  pageSize: number;
  totalUserCount: number;
  currenPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

type mapDispatchToPropsType = {
  FollowAC: (userId: number) => void;
  ufollowAC: (userId: number) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrenPage: (currenPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  ToggleFeathingAC: (isFetching: boolean) => void;
  ToggleFeathingProherssAC: (isFetching: boolean, userId: number) => void;
};

class UsersAPIComponent extends React.Component<
  SuperUserContainerType,
  UsersType
> {
  componentDidMount() {
    this.props.ToggleFeathingAC(true);
    usersAPI
      .getUsers(this.props.currenPage, this.props.pageSize)
      .then((data) => {
        this.props.ToggleFeathingAC(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChange = (page: number) => {
    // Обновляем currentPage в Redux
    this.props.setCurrenPage(page);
    this.props.ToggleFeathingAC(true);
    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.ToggleFeathingAC(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        <Users
          users={this.props.users}
          FollowAC={this.props.FollowAC}
          ufollowAC={this.props.ufollowAC}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          currenPage={this.props.currenPage}
          onPageChange={this.onPageChange}
          followingInProgress={this.props.followingInProgress}
          ToggleFeathingProherssAC={this.props.ToggleFeathingAC}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currenPage: state.usersPage.currenPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export const UsersContainer = connect(mapStateToProps, {
  FollowAC,
  ufollowAC,
  setUsers: setUsersAC,
  setCurrenPage: setCurrentAC,
  setTotalUsersCount: setUsersTotalCountAC,
  ToggleFeathingAC,
  ToggleFeathingProherssAC,
})(UsersAPIComponent);
