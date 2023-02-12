import React from "react";
import styled from "styled-components";

const Notification = () => {
  return (
    <SideVar>
      <div>
        Notification Page <br /> <button>Go To Materials page</button>
      </div>
    </SideVar>
  );
};

export default Notification;

const SideVar = styled.div`
  font-size: 2rem;
  background-color: white;
  height: 100vh;
  padding: 15px;
  margin-left: -320px;
  & div {
    margin-top: 30px;
  }
  & button {
    width: 300px;
    height: 50px;
    border-radius: 30px;
    background-color: rgb(25, 174, 159);
    border: none;
    box-shadow: 1px 1px 5px 5px;
    margin-top: 60px;
  }
`;
