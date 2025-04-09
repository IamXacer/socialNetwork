import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import { UsersType } from "../../redux/Users-reducer";
import axios from "axios";

type UsersPropsType = {
  users: UsersType[];
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrenPage: (page: number) => void;
  setTotalUsersCount: (UserCount: number) => void;
  onPageChange: (page: number) => void;
  pageSize: number;
  totalCount: number;
  currentPaga: number;
  // Добавляем onPageChange
};

export const Users: React.FC<UsersPropsType> = ({
  totalCount,
  pageSize,
  currentPaga,
  users,
  follow,
  unfollow,
  onPageChange,
}) => {
  let pageCount = Math.ceil(totalCount / pageSize);
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
              onClick={() => {
                onPageChange(page); // Используем onPageChange, переданный в пропсах
              }}
              className={currentPaga === page ? s.selectedPage : undefined}
              key={page} // Добавляем key для каждого элемента в map
            >
              {page}
            </span>
          );
        })}
      </div>

      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={s.img}
                src={u.photos.small ? u.photos.small : userPhoto}
                alt="user"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    follow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    unfollow(u.id);
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
            </span>
            <span>
              <div>{u.location?.country}</div>
              <div>{u.location?.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
