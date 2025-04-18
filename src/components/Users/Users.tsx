import React, { useEffect, useState } from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import {
  FollowAC,
  ToggleFeathingProherssAC,
  ufollowAC,
  UsersType,
} from "../../redux/Users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

type UsersPropsType = {
  users: UsersType[];
  FollowAC: (userId: number) => void;
  ufollowAC: (userId: number) => void;
  ToggleFeathingProherssAC: (isFetching: boolean) => void;
  onPageChange: (page: number) => void;
  totalUserCount: number;
  pageSize: number;
  currenPage: number;
  followingInProgress: number[];
};

const Paginator: React.FC<{
  totalUserCount: number;
  pageSize: number;
  currenPage: number;
  onPageChange: (page: number) => void;
}> = ({ totalUserCount, pageSize, currenPage, onPageChange }) => {
  const pagesCount = Math.ceil(totalUserCount / pageSize);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionSize = 10; // Количество страниц в порции
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(
    Math.floor((currenPage - 1) / portionSize) + 1,
  );

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  // Обновляем portionNumber, когда currentPage меняется
  useEffect(() => {
    setPortionNumber(Math.floor((currenPage - 1) / portionSize) + 1);
  }, [currenPage]);

  return (
    <div className={s.message}>
      {portionNumber > 1 && (
        <button
          className={s.button}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          PREF
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber,
        )
        .map((p) => (
          <span
            key={p}
            onClick={() => onPageChange(p)} // При клике на страницу обновляем currentPage
            className={currenPage === p ? s.selectedPage : ""}
          >
            <li className={s.PageStyle}>{p}</li>
          </span>
        ))}

      {portionCount > portionNumber && (
        <button
          className={s.paginatorButton}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          RIGHT
        </button>
      )}
    </div>
  );
};

export const Users: React.FC<UsersPropsType> = ({
  totalUserCount,
  pageSize,
  currenPage,
  users,
  FollowAC,
  ufollowAC,
  onPageChange,
  ToggleFeathingProherssAC,
  followingInProgress,
}) => {
  const [isFollowingInProgress, setIsFollowingInProgress] = useState<number[]>(
    [],
  );

  const handleFollowClick = (userId: number) => {
    setIsFollowingInProgress((prev) => [...prev, userId]); // Блокируем кнопку
    usersAPI.follow(userId).then((res) => {
      if (res.data.resultCode === 0) {
        FollowAC(userId);
      }
      setIsFollowingInProgress((prev) => prev.filter((id) => id !== userId)); // Разблокируем кнопку
    });
  };

  const handleUnfollowClick = (userId: number) => {
    setIsFollowingInProgress((prev) => [...prev, userId]); // Блокируем кнопку
    usersAPI.unfollow(userId).then((res) => {
      if (res.data.resultCode === 0) {
        ufollowAC(userId);
      }
      setIsFollowingInProgress((prev) => prev.filter((id) => id !== userId)); // Разблокируем кнопку
    });
  };
  return (
    <div>
      <Paginator
        totalUserCount={totalUserCount}
        pageSize={pageSize}
        currenPage={currenPage}
        onPageChange={onPageChange}
      />

      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={s.img}
                  src={u.photos.small ? u.photos.small : userPhoto}
                  alt="user"
                />
              </NavLink>
            </div>
            <div>
              {" "}
              {u.followed ? (
                <button
                  disabled={isFollowingInProgress.includes(u.id)}
                  className={s.button}
                  onClick={() => handleUnfollowClick(u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={isFollowingInProgress.includes(u.id)}
                  className={s.button}
                  onClick={() => handleFollowClick(u.id)}
                >
                  Follow
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
