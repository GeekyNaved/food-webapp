import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" className="error_img"/>
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .error_img {
    max-width: 40%;
    height: auto;
  }
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;