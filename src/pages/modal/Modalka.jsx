import React from "react";
import styled from "styled-components";

const Modalka = ({ onClose }) => {
  return (
    <Container>
      <p>
        <h3>Add new Material modal</h3>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Vitae quisquam quae, praesentium doloremque, at in
        <br /> incidunt architecto nam laboriosam accusantium <br />
        vel obcaecati iusto animi amet?A ut blanditiis nesciunt?
        <button onClick={onClose}>Close</button>
      </p>
    </Container>
  );
};

export default Modalka;

const Container = styled.div`
  position: relative;
  left: 350px;
  top: -150px;
  font-size: 1.2rem;
  & p {
    width: 500px;
    height: 240px;
    background-color: rgb(245, 218, 222);
    padding: 30px;
  }
  & button {
    width: 130px;
    height: 35px;
    border-radius: 30px;
    border: none;
    background-color: rgb(25, 174, 159);
    margin-left: 300px;
    margin-top: 20px;
  }
`;
