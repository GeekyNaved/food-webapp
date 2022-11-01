import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <MainNavBar>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </MainNavBar>
  );
};

const MainNavBar = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4rem;
    .navbar-link {
        &:link, &:visited {
            text-decoration: none;
            display: inline-block;
            font-size: 1rem;
            color: ${({theme}) => theme.colors.black};
            text-transform: uppercase;
            transition: color 0.3s linear;
        }

        &:hover, &:active{
            color: ${({theme}) => theme.colors.helper};
            text-decoration: underline;   
        }
        
    }
  }
`;
export default Navbar;
