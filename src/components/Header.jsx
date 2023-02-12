import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <ul>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#fff",
              textDecoration: "none",
            })}
            to="materials"
          >
            {" "}
            Materials
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#fff",
              textDecoration: "none",
            })}
            to="students"
          >
            {" "}
            Students
          </NavLink>{" "}        </li>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#fff",
              textDecoration: "none",
            })}
            to="rating"
          >
            {" "}
            Rating
          </NavLink>{" "}        </li>
      </ul>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  width: 76%;
  margin-left: 322px;
  height: 80px;
  background-color: rgb(44, 136, 217);
  display: flex;
  justify-content: space-around;
  & ul {
    display: flex;
    gap: 100px;
    list-style: none;
    cursor: pointer;
    position: relative;
    left: -200px;
    top: 20px;
    font-size: 2rem;
    color: white;
  }
`;
