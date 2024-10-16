import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
type DialogsItemProps = {
  id:string,
  name:string
}

export const DialogsItem = (props:DialogsItemProps) => {
  let path = '/dialog/'+ props.id
  return (
      <div className={s.dialog}> <NavLink
          className = { nav => nav.isActive ? s.active : s.item } to={path} >{props.name}</NavLink></div>

      
  )
}
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
export const Message = (props:Messagetype) => {
return (
    <div>
      <div className={s.message}>{props.message}</div>
    </div>
)
}