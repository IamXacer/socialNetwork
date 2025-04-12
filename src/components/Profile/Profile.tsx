import React from "react";
import styled from "styled-components";
import { PostsType, type ProfileType } from "../../redux/Profile-reducer";
import { Preloader } from "../common/Prealoader/Preloader";

// Стили для компонента профиля
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px; // Добавляем отступ снизу, чтобы разделить изображение и текст
`;

const SunImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(10px);
  margin-bottom: 10px; // Добавляем отступ снизу
`;

type Profile = {
  profile: ProfileType;
};

export const Profile = (props: Profile) => {
  if (!props.profile || !props.profile.photos || !props.profile.photos.large) {
    return (
      <div>
        <Preloader />
      </div>
    ); // Показываем сообщение о загрузке
  }
  return (
    <ProfileContainer>
      <ImageWrapper>
        <SunImage
          src="https://avatanplus.com/files/resources/original/5b7c1efd295881655cd90cf1.jpg"
          alt="Sunset"
        />
        <ProfileImage src={props.profile.photos.large} alt="Profile" />
      </ImageWrapper>
    </ProfileContainer>
  );
};
