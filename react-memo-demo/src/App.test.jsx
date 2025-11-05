import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("increments counter", () => {
  render(<App />);

  const btn = screen.getByText(/Increment/i);

  fireEvent.click(btn);
  fireEvent.click(btn);

  expect(screen.getByText(/Count: 2/)).toBeInTheDocument();
});

test("filters list items", () => {
  render(<App />);

  const inp = screen.getByTestId("filter");

  fireEvent.change(inp, { target: { value: "item 12" }});

  const list = screen.getByTestId("list");

  expect(list.textContent).toMatch(/Item 12/);
});

test("expensive calculation updates", () => {
  render(<App />);

  const inp = screen.getByTestId("number-input");

  fireEvent.change(inp, { target: { value: "5" }});

  expect(screen.getByTestId("number-result")).toHaveTextContent("5");
});