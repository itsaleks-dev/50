import React, { useState, useMemo } from "react";
import styled from "styled-components";

const Card = styled.div`
    margin: 20px 0;
    padding: 20px;
    border-radius: 12px;
    background: ${({ theme }) => theme.card};
    box-shadow: ${({ theme }) => theme.shadow};
`;

function slowOp(n) {
    console.log("%cHeavy calculation", "color: orange");
    
    let sum = 0;
    for (let i = 0; i < 70_000_00; i++) sum +=n;
    return sum;
}

export default function ExpensiveSum() {
    const [balue, setValue] = useState(1);
    const result = useMemo(() => slowOp(value), [value]);

    return (
        <Card>
            <h3>useMemo Example</h3>
            <input
            data-testid="number-input"
            type="number"
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            />
            <p data-testid="number-result">Result: {result}</p>
        </Card>
    );
}
