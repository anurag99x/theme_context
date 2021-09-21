import React from "react";
import "./form.module.css";
import styled from "styled-components";

const InputItem = styled.input`
  width: 200px;
  height: 20px;
  width: ${(props) => (props.theme === "light" ? "250px" : "300px")};
  border-radius: ${(props) => (props.theme === "light" ? "0px" : "10px")};
  padding: ${(props) => (props.theme === "light" ? "0px" : "10px")};
`;

export const Form = ({ theme }) => {
  return (
    <form>
      <InputItem
        placeholder={theme === "light" ? "name" : "NAME"}
        theme={theme}
      />
    </form>
  );
};
