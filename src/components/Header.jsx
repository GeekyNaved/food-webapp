import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="https://www.themealdb.com/images/category/dessert.png" className="logo" alt="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
background-color: ${({theme}) => theme.colors.nav_bg};
display: flex;
justify-content: space-between;
align-items: center;
height: 10rem;
padding: 0 4.8rem;
.logo{
    max-width: 35%;
    height: auto;
}
`;

export default Header;
