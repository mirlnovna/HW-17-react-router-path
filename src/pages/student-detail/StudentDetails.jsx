import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StudentsDetail = () => {
  const param = useParams();

  return (
    <Container>
      <p>
        Student Detail page: <div>Student {param.studentId}</div>
      </p>
    </Container>
  );
};

export default StudentsDetail;
const Container = styled.div`
  font-size: 2rem;
  & p {
    width: 800px;
    position: relative;
    left: 340px;
    top: 10px;
    padding: 15px;
    height: 420px;
    background-color: white;
    text-align: start;
  }
  & div {
    margin-top: 20px;
  }
`;
