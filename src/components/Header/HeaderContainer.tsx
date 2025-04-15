import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import axios from "axios";
import { type AuthStateType, authUser } from "../../redux/auth-reducer";
import { RootState } from "../../redux/redux-store";

// Типы пропсов для контейнера
type MapDispatchPropsType = {
  togleIsFetching: (isFetching: boolean) => void;
  authUser: (userData: AuthStateType) => void;
};

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

export type HeaderPropsType = MapDispatchPropsType & MapStatePropsType;

export class HeaderContainer extends React.Component<any, HeaderPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          debugger;
          // Создаем объект типа AuthStateType
          const authData: AuthStateType = {
            userId: id,
            login: login,
            email: email,
            isAuth: true,
            logout: null,
            captchaUrl: null,
          };

          this.props.authUser(authData); // Передаем весь объект authData
        }
      });
  }

  render() {
    return <Header {...this.props} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authUser })(HeaderContainer);
