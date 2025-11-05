import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        background: ${({ theme }) => theme.bg};
        font-family: system-ui, sans-serif;
        color: ${({ theme }) => theme.text};
        transition: 0.3s;
    }
`;
