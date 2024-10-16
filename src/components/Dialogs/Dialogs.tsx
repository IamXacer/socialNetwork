import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItem, FriendsPhotoGrid, Message} from "./DialogsItem";

export const Dialogs = () => {
    const friends = [
        { src: "https://html.crumina.net/html-olympus/img/avatar38-sm.webp", alt: "Friend 1" },
        { src: "https://html.crumina.net/html-olympus/img/avatar24-sm.webp", alt: "Friend 2" },
        { src: "https://html.crumina.net/html-olympus/img/avatar36-sm.webp", alt: "Friend 3" },
        { src: "https://html.crumina.net/html-olympus/img/avatar35-sm.webp", alt: "Friend 4" },
        { src: "https://html.crumina.net/html-olympus/img/avatar34-sm.webp", alt: "Friend 5" },
        { src: "https://html.crumina.net/html-olympus/img/avatar33-sm.webp", alt: "Friend 6" },
        { src: "https://html.crumina.net/html-olympus/img/avatar28-sm.webp", alt: "Friend 7" },
        { src: "https://html.crumina.net/html-olympus/img/avatar25-sm.webp", alt: "Friend 8" },
        { src: "https://html.crumina.net/html-olympus/img/avatar45-sm.webp", alt: "Friend 9" },
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <DialogsItem id='1' name='Dimich' />
                    <DialogsItem id='2' name='Sasha'/>
                    <DialogsItem id='3' name='Sveta'/>
                    <DialogsItem id='4' name='Viktor'/>
                    <DialogsItem id='5' name='Valery'/>
                </div>
            </div>
            <div className={s.messages}>
               <Message message='Hi'/>
               <Message message='How are you'/>
               <Message message='Yo'/>
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
                    <FriendsPhotoGrid friends={friends}/>
                </div>
            </div>
        </div>
    );
};
