import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  let activeStyle = {
    color: '#8490ff',
    borderBottom: "2px solid black",
  };

  return (
    <MainNavBar>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/services"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
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
      text-decoration: none;
      display: inline-block;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.black};
      text-transform: uppercase;
      // transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;
export default Navbar;
