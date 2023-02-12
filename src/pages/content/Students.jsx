import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const students = [
  {
    title: "Student 1",
    id: 1,
  },
  {
    title: "Student 2",
    id: 2,
  },
];

const Students = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => navigate(`${item.id}/detail`)}>
              Detail
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default Students;

const Container = styled.div`
  width: 600px;
  position: relative;
  left: 340px;
  & ul {
    list-style: none;
    position: relative;
    top: 50px;
  }
  li {
    background-color: white;
    margin: 15px;
    height: 60px;
    padding: 15px;
    font-size: 1.5rem;
    text-align: start;
  }
  & button {
    cursor: pointer;
    width: 130px;
    height: 35px;
    border-radius: 30px;
    border: none;
    background-color: rgb(25, 174, 159);
    margin-left: 280px;
  }
`;
