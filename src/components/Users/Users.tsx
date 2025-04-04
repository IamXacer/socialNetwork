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

export class Users extends React.Component<UsersPropsType, any>{
     getUsers = ()=>{
        if(this.props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                debugger
                this.props.setUsers(response.data.items)
            })

        }
    }
 render(){
    return <div>
         <button onClick={this.getUsers}>Get Users</button>
         {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img className={s.img} src={u.photos.small ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                debugger
                                this.props.follow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                debugger
                                this.props.unfollow(u.id)
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
 }

}
