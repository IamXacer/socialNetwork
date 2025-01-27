import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItem, FriendsPhotoGrid, Message} from "./DialogItem/DialogsItem";
<<<<<<< HEAD
import {dialogItem, dialogItemType, friends, friendType, Messages, MessagesType} from "../../redux/state";
 export type DialogsType = {
     friends:friendType[],
     Messages:MessagesType[],
=======
import {
    dialogItem,
    dialogItemType,
    friendType,
    stateType} from "../../redux/state";

 export type DialogsType = {
     friends:friendType[],
     state:stateType,
>>>>>>> 52988fd (Инициализация проекта и добавление файлов)
     dialogItem:dialogItemType[]
}
export const Dialogs = (props:DialogsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <DialogsItem dialogItem={dialogItem}  />
                </div>
            </div>
            <div className={s.messages}>
<<<<<<< HEAD
                <Message Messages={props.Messages}/>
=======
                <Message Messages={props.state.dialogPage.Messages}/>
>>>>>>> 52988fd (Инициализация проекта и добавление файлов)

            </div>

            {/* Контейнер для фото (мой блок и блок друзей) */}
            <div className={s.friendsSection}>
                <div className={s.myPhotos}>
                    <h3>My Photos</h3>
                    <div className={s.photoGrid}>
                        <img className={s.photo} src="https://html.crumina.net/html-olympus/img/last-photo10-large.webp" alt="My Photo 1"/>
                        <img className={s.photo} src="https://html.crumina.net/html-olympus/img/last-phot11-large.webp" alt="My Photo 2"/>
                        <img className={s.photo} src="https://html.crumina.net/html-olympus/img/last-phot12-large.webp" alt="My Photo 3"/>
                        <img className={s.photo} src="https://html.crumina.net/html-olympus/img/last-phot13-large.webp" alt="My Photo 4"/>
                        <img className={s.photo} src="https://html.crumina.net/html-olympus/img/last-phot14-large.webp" alt="My Photo 5"/>
                        <img className={s.photo} src="https://html.crumina.net/html-olympus/img/last-phot16-large.webp" alt="My Photo 6"/>
                    </div>
                </div>

                <div className={s.friendsInfo}>
                    <h3>Friends (86)</h3>
                    <FriendsPhotoGrid friends={props.friends}/>
                </div>
            </div>
        </div>
    );
};
