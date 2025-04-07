import React from "react";
import { UsersType } from "../../redux/Users-reducer";
import userPhoto from "../../assets/img/photo.png";
import s from "./Users.module.css";
import axios from "axios";

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
};

export class Users extends React.Component<UsersPropsType, any> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPaga}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        debugger;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChange = (currentPaga: number) => {
    this.props.setCurrenPage(currentPaga);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPaga}&count=${this.props.pageSize}`,
      )
      .then((response) => {
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
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                onClick={(e) => {
                  this.onPageChange(page);
                }}
                className={
                  this.props.currentPaga === page ? s.selectedPage : undefined
                }
              >
                {page}
              </span>
            );
          })}
        </div>

        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={s.img}
                  src={u.photos.small ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      debugger;
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      debugger;
                      this.props.unfollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div></div>
              </span>
              <span>
                <div>{u.location?.country}</div>{" "}
                {/* Исправлено для отображения данных локации */}
                <div>{u.location?.city}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
