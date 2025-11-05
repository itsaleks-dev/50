import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: ${({ theme }) => theme.primary};
    color: white;
`;

function ChildButton({ onClick }) {
    console.log("%ChildButton rendered", "color: purple");
    return <Btn onClick={onClick}>Increment</Btn>;
}

export default React.memo(ChildButton);
