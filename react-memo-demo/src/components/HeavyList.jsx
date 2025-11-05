import React, { useState, useMemo } from "react";
import styled from "styled-components"

const Card = styled.div`
    padding: 20px;
    border-radius: 12px;
    background: ${({ theme }) => theme.card};
    box-shadow: ${({ theme }) => theme.shadow};
`;

function generateItems() {
    console.log("%cGenerating large list", "color: blue");
    return Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
}

export default function HeavyList() {
    const [filter, setFilter] = useState("");

    const items = useMemo(() => generateItems(), []);
    const filtered = items.filter((i) =>
    i.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Card>
            <h3>Heavy List Memoized</h3>
            <input 
            data-testid="filter"
            placeholder="Filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            />
            <ul data-testid="list">
                {filtered.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        </Card>
    );
}
