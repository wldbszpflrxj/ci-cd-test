import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    color: "red",
    borderColor: "blue",
  },
};

// Define what props.theme will look like
const defaultTheme = {
  color: "green",
  borderColor: "pink",
};
const redTheme = {
  color: "red",
  borderColor: "pink",
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`;

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(defaultTheme);
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <GlobalStyle />
      <div>
        <button onClick={() => setTheme(redTheme)}>red</button>
        <button onClick={() => setTheme(defaultTheme)}>green</button>

        <ThemeProvider theme={theme}>
          <Button>Normal</Button>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      <div>
        <button>Other</button>
      </div>
    </>
  );
}
