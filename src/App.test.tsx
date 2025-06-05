import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App.js";

test("App should show a title", () => {
  render(<App />);
  const title = screen.getByText("Minesweeper");
  expect(title).toBeInTheDocument();
});
