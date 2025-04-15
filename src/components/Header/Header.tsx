import React from "react";
import styled from "styled-components";

// Создаем стилизованные компоненты
const HeaderContainer = styled.header`
  width: 100%;
  grid-area: h;
  background-color: aqua;
`;

const Logo = styled.img`
  width: 50px;
`;

const LoginBlock = styled.div`
  float: right;
  color: white;
`;

const LoginLink = styled.a`
  color: white;
`;

type HeaderProps = {
  isAuth: boolean;
};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo src="https://dynamic.brandcrowd.com/asset/logo/a2914386-9b94-4a31-96eb-c5ff9fdfe1b9/insta-square?v=637716019321130000" />
      <LoginBlock>
        <div>
          <span></span>
          <button>Log out</button> {/* Используем logout */}
        </div>

        <LoginLink href="#">Login</LoginLink>
      </LoginBlock>
    </HeaderContainer>
  );
};
