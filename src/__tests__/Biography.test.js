import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a paragraph for the biography", () => {
  // Arrange
  render(<App />);
  
  // Act
  const paragraph = screen.getByText(/your biography text/i);
  
  // Assert
  expect(paragraph).toBeInTheDocument();
});