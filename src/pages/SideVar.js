import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideVar = () => {
  return (
    <Container>
      <h1>LOGO</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : null,
              textDecoration: "none",
              backgroundColor: isActive ? "rgb(227,207,243)" : null,
            })}
            to="/courses"
          >
            {" "}
            Courses
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : null,
              textDecoration: "none",
              backgroundColor: isActive ? "rgb(227,207,243)" : null,
            })}
            to="/anouncements"
          >
            {" "}
            AnounCements
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : null,
              textDecoration: "none",
              backgroundColor: isActive ? "rgb(227,207,243)" : null,
            })}
            to="/notification"
          >
            {" "}
            Notification
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : null,
              textDecoration: "none",
              backgroundColor: isActive ? "rgb(227,207,243)" : null,
            })}
            to="/schedule"
          >
            {" "}
            Schedule
          </NavLink>{" "}
        </li>
      </ul>
    </Container>
  );
};

export default SideVar;

const Container = styled.div`
  width: 326px;
  height: 600px;
  position: fixed;
  background-color: rgb(195, 207, 217);
  & h1 {
    color: rgb(135, 55, 199);
    position: relative;
    top: 27px;
    font-weight: 700;
    font-size: 2.2rem;
  }
  & ul {
    margin-top: 100px;
    width: 326px;
    height: 220px;
    background-color: white;
    font-size: 1.4rem;
    font-weight: 500;
  }
  & li {
    margin: 19px;
    list-style: none;
    position: relative;
    top: 30px;
    left: 60px;
    cursor: pointer;
    text-align: left;
    letter-spacing: 4px;
  }
`;
