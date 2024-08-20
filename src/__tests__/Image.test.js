import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays an image with alt text identifying the content of the image", () => {
  // Arrange
  render(<App />);
  
  // Act
  const image = screen.getByAltText(/your name/i);
  
  // Assert
  expect(image).toBeInTheDocument();
});