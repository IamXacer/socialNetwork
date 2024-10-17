import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
/*type DialogsItemProps = {
  id:string,
  name:string
}*/

export const DialogsItem = () => {
    const dialogItem = [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Viktor" },
        { id: 5, name: "Valery" },
    ];

    return (
        <div>
            {dialogItem.map((el) => {
                const path = "/dialog/" + el.id; // Используем el.id вместо props.id
                return (
                    <div key={el.id} className={s.dialog}>
                        <NavLink className={(nav) => (nav.isActive ? s.active : s.item)} to={path}>
                            {el.name}
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
};
type Friend = {
  src: string,
  alt: string
}

type FriendsPhotoGridProps = {
  friends: Friend[]
}
export const FriendsPhotoGrid  = (props: FriendsPhotoGridProps) => {
  return (
      <div className={s.friendPhotoGrid}>
        {props.friends.map((friends,index)=>(
            <img className={s.friendPhoto} src={friends.src} alt={friends.alt}/>
        ))}
      </div>
  )
}
type Messagetype = {
  message:string
}

export const Message = () => {
    const Messages = [
        {message: 'Hi',},
        {message: 'How are you',},
        {message: 'Yo',},
        {message: 'Yo',},
        {message: 'Yo',},

    ]
return (
    <div>
      <div className={s.message}>K
          {Messages.map((el,index)=>{
              return (
                  <div className={s.message}>{el.message}</div>
              )
          })}
      </div>
    </div>
)
}