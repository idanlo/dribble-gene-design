import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  margin: 0 25px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  transform: rotate(90deg);
  margin-right: 10px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 20px;
  margin-left: 100px;
  background: #f5f7f6;
  border: none;
  outline: none;

  &::placeholder {
    font-weight: bold;
    color: #d2d7d1;
  }
`;

const Author = styled.a.attrs(() => ({
  target: "_blank",
  href: "https://github.com/idanlo"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-decoration: none;
  color: #000;
`;

const AuthorImage = styled.img.attrs(props => ({
  src: props => props.src
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-self: center;
  margin-right: 15px;
`;

const AuthorName = styled.h3`
  margin-right: 15px;
`;

function Header() {
  return (
    <Div>
      <Logo>
        <LogoImage
          src="https://image.flaticon.com/icons/svg/1422/1422840.svg"
          style={{ width: 50, height: 50 }}
        />
        <Title>Gene</Title>
        <Input placeholder="Search for what you need" />
      </Logo>
      <Author>
        <AuthorImage src="https://avatars3.githubusercontent.com/u/28350511?s=460&v=4" />
        <AuthorName>IdanLo</AuthorName>
      </Author>
    </Div>
  );
}

export default Header;
