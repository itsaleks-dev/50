import React, { useState, useMemo } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: ${({ theme }) => theme.shadow};
`;

function slowOp(n) {
  let sum = 0;
  for (let i = 0; i < 70_000_00; i++) sum += n;
  return sum;
}

export default function ExpensiveSum() {
  const [value, setValue] = useState(1);

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