import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {follow, setUsers, unfollow, UsersType} from "../../redux/Users-reducer";
import {Users} from "./Users";

type mapStateToPropsType = {
    users:UsersType[]

}
const mapStateToProps = (state:RootState):mapStateToPropsType => {
return {
    users:state.usersPage.users,
}
}
type mapDispatchToPropsType = {
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers:(users:UsersType[])=>void;// Мы теперь ожидаем, что эта функция получит postText
};
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            console.log('followAc')
            dispatch(follow(userId)); // Используем экшн-креатор из слайса
        },
        unfollow: (userId: string) => {
            console.log('unfollowAc')
            dispatch(unfollow(userId)); // Используем экшн-креатор из слайса
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsers(users)); // Используем экшн-креатор из слайса
        },
    };
};

const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;