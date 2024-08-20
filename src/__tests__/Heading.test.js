import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a second-level heading with the text 'About Me'", () => {
  // Arrange
  render(<App />);
  
  // Act
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  
  // Assert
  expect(secondLevelHeading).toBeInTheDocument();
});