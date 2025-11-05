import React, { useState, useCallback} from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from"./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

import ChildButton from "./components/ChildButton";
import ExpensiveSum from "./components/ExpensiveSum";
import HeavyList from "./components/HeavyList";

const Container = styled.div`
    max-width: 720px;
    margin: auto;
    padding: 40px;
`;

const ToggleBtn = styled.button`
    margin-bottom: 20px;
`;

export default function App() {
    const [theme, setTheme] = useState("light");
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Container>
                <ToggleBtn onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
                    Toggle Theme
                </ToggleBtn>

                <h2>Count: {count}</h2>
                <ChildButton onClick={increment} />
                <ExpensiveSum />
                <HeavyList />
            </Container>
        </ThemeProvider>
    );
}
