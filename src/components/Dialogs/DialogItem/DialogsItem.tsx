import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {dialogItem, dialogItemType, MessagesType} from "../../../redux/state";
type DialogsItemProps = {
    dialogItem:dialogItemType[]
}

export const DialogsItem = (props:DialogsItemProps) => {

    return (
        <div>
            {props.dialogItem.map((el) => {
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
export type MessagesPropsType ={
    Messages:MessagesType[]
}

export const Message = (props:MessagesPropsType) => {
return (
    <div>
      <div className={s.message}>K
          {props.Messages.map((el,index)=>{
              return (
                  <div className={s.message}>{el.message}</div>
              )
          })}
      </div>
    </div>
)
}