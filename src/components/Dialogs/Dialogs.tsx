import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>  <NavLink to='/dialog/1'
                 className = { nav => nav.isActive ? s.active : s.item }
                >Dimich</NavLink></div>
                <div className={s.dialog}>  <NavLink to='/dialog/2'
                 className = { nav => nav.isActive ? s.active : s.item }
                >Sasha</NavLink></div>
                <div className={s.dialog}>  <NavLink to='/dialog/3'
                    className = { nav => nav.isActive ? s.active : s.item }
                >Sveta</NavLink></div>
                <div className={s.dialog}>  <NavLink to='/dialog/4'
                 className = { nav => nav.isActive ? s.active : s.item }
                >Viktor</NavLink></div>
                <div className={s.dialog}>  <NavLink to='/dialog/5'
                className = { nav => nav.isActive ? s.active : s.item }
                >Valery</NavLink></div>

            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>

            {/* Контейнер для фото (мой блок и блок друзей) */}
            <div className={s.friendsSection}>
                 Блок с твоими фотографиями
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

                 Блок с фотографиями друзей
                <div className={s.friendsInfo}>
                    <h3>Friends (86)</h3>
                    <div className={s.friendPhotoGrid}>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar38-sm.webp" alt="Friend 1"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar24-sm.webp" alt="Friend 2"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar36-sm.webp" alt="Friend 3"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar35-sm.webp" alt="Friend 4"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar34-sm.webp" alt="Friend 5"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar33-sm.webp" alt="Friend 6"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar28-sm.webp" alt="Friend 7"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar25-sm.webp" alt="Friend 8"/>
                        <img className={s.friendPhoto} src="https://html.crumina.net/html-olympus/img/avatar45-sm.webp" alt="Friend 9"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
