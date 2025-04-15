import React, { useEffect, useState } from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/photo.png";
import { UsersType } from "../../redux/Users-reducer";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
  users: UsersType[];
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  onPageChange: (page: number) => void;
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

const Paginator: React.FC<{
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ totalCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionSize = 10; // Количество страниц в порции
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(
    Math.floor((currentPage - 1) / portionSize) + 1,
  );

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  // Обновляем portionNumber, когда currentPage меняется
  useEffect(() => {
    setPortionNumber(Math.floor((currentPage - 1) / portionSize) + 1);
  }, [currentPage]);

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
            className={currentPage === p ? s.selectedPage : ""}
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
  totalCount,
  pageSize,
  currentPage,
  users,
  follow,
  unfollow,
  onPageChange,
}) => {
  return (
    <div>
      <Paginator
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
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
