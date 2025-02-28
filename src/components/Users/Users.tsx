import React from 'react';
import {UsersType} from "../../redux/Users-reducer";
import userPhoto from '../../assets/img/photo.png'
import s from './Users.module.css'
import axios from "axios";


type UsersPropsType = {
    users: UsersType[];
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers:(users:UsersType[])=>void;
}
export const Users: React.FC<UsersPropsType> = ({users, follow, unfollow,setUsers}) => {
    if(users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            setUsers(response.data.items)
        })

    }
    return (
        <div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img className={s.img} src={u.photos.small ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                debugger
                                follow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                debugger
                                unfollow(u.id)
                            }}>UnFollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div></div>
                    </span>
                    <span>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                        {"u.location.city"}
                    </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

