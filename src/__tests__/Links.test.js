import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a link to GitHub with the correct href", () => {
  // Arrange
  render(<App />);
  
  // Act
  const githubLink = screen.getByRole("link", { name: /github/i });
  
  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");
});

test("displays a link to LinkedIn with the correct href", () => {
  // Arrange
  render(<App />);
  
  // Act
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
  // Assert
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-profile");
});