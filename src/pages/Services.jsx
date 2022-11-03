import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { Button } from "../styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  //  const tempData = [
  //   {
  //     id: 1,
  //     title: "lorem 1",
  //     image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  //   },
  //   {
  //     id: 2,
  //     title: "lorem 2",
  //     image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  //   },
  //   {
  //     id: 3,
  //     title: "lorem 3",
  //     image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  //   },
  //   {
  //     id: 4,
  //     title: "lorem 4",
  //     image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  //   },
  //   {
  //     id: 5,
  //     title: "lorem 5",
  //     image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  //   },
  //   {
  //     id: 6,
  //     title: "lorem 6",
  //     image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  //   },
  //  ];
  console.log(Array.isArray(services));
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = curElem;
          return (
            <div key={idCategory} className="card">
              <figure>
                <img src={strCategoryThumb} alt={strCategory} />
              </figure>
              <div className="card-data">
                <h3>{strCategory}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat quis impedit!</p>
                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  // @media (max-width: ${({ theme }) => theme.media.tab}) {
  //   .grid-three-column {
  //     grid-template-columns: 1fr 1fr;
  //   }
  // }
  // @media (max-width: ${({ theme }) => theme.media.mobile}) {
  //   .grid-two-column,
  //   .grid-three-column {
  //     grid-template-columns: 1fr;
  //   }
  // }
`;

export default Services;
