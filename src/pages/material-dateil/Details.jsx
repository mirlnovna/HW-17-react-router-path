import React from "react";
import {NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const param = useParams();
  return (
    <Container>
      <h2>
        Material detail: <p>Material {param.materialsId}</p>
      </h2>
      <div>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#fff",
            textDecoration: "none",
          })}
          to="submitted"
        >
          {" "}
          Submitted
        </NavLink>{" "}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#fff",
            textDecoration: "none",
          })}
          to="waiting"
        >
          {" "}
          Waiting
        </NavLink>{" "}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#fff",
            textDecoration: "none",
          })}
          to="late"
        >
          {" "}
          Late
        </NavLink>{" "}
        <Outlet />
      </div>
    </Container>
  );
};

export default Details;
const Container = styled.div`
  & h2 {
    border: 2px solid black;
    background-color: white;
    border: none;
    position: relative;
    top: 70px;
    left: 340px;
    width: 620px;
    height: 90px;
    text-align: start;
    padding: 20px;
  }
  div {
    position: relative;
    top: 100px;
    left: 340px;
    font-size: 2rem;
    display: flex;
    gap: 20px;
  }
`;
