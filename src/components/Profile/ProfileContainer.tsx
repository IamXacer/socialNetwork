import React from "react";
import styled from "styled-components";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import { RootState } from "../../redux/redux-store";
import {
  type initStateType,
  type ProfileType,
  setUserProfile,
} from "../../redux/Profile-reducer"; // Импортируйте экшен
import { connect } from "react-redux";
import { Preloader } from "../common/Prealoader/Preloader";
import { togleIsFetching, UsersType } from "../../redux/Users-reducer";

// Стили для компонента профиля
const ProfileContaine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1650px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 400px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

class ProfileContainer extends React.Component<any, initStateType> {
  componentDidMount() {
    this.props.togleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.togleIsFetching(false);
        this.props.setUserProfile(response.data); // Обновление состояния профиля
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }

  render() {
    if (!this.props.profile) {
      return (
        <div>
          <Preloader />
        </div>
      ); // Показываем сообщение или компонент загрузки
    }

    return <MyPostsContainer {...this.props} profile={this.props.profile} />;
  }
}
export type mapStateToPropsType = {
  profile: any;
};

// mapStateToProps: если нужно подключить состояние
const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

// mapDispatchToProps: добавляем экшен для dispatch
const mapDispatchToProps = {
  setUserProfile,
  togleIsFetching, // Теперь экшен доступен для передачи через пропсы
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
