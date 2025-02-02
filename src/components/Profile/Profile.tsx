import React from "react";
import styled from "styled-components";

// Стили для компонента профиля
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1650px;  // Ограничиваем максимальную ширину изображения
  height: auto;  // Позволяем высоте изменяться пропорционально

  @media (max-width: 768px) {
    max-width: 100%;  // При мобильных экранах изображение будет занимать всю ширину
    height: auto;  // Высота будет подстраиваться
  }

  @media (max-width: 480px) {
    max-width: 100%;  // Для очень маленьких экранов
    height: 400px;  // Ограничиваем максимальную высоту для маленьких экранов
  }

  img {
    width: 100%;
    height: auto;  // Подстраиваем высоту изображения
  }
`;

export const Profile = () => {
    return (
        <ProfileContainer>
            <ImageWrapper>
                <img src="https://avatanplus.com/files/resources/original/5b7c1efd295881655cd90cf1.jpg" alt="Profile" />
            </ImageWrapper>
        </ProfileContainer>
    );
};
