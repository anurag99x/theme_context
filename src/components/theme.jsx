import React from "react";
import { ThemeContext } from "../Context/themeContext";
import styled from "styled-components";
import { Form } from "./form";

const Navbar = styled.div`
  width: 100%;
  height: 100px;
  //   border: 1px solid black;
  margin: 10px auto;
  background: ${(props) => (props.theme === "light" ? "black" : "wheat")};
`;

const Button = styled.button`
  width: 100px;
  height: 80px;
  border: none;
  border-radius: 10px;
  background: red;
  &:hover {
    background: green;
  }
`;

const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <Navbar theme={theme}></Navbar>
      <Button onClick={(e) => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </Button>
      <Form theme={theme} />
    </div>
  );
};

export { Theme };
