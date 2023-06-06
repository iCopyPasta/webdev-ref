import Greeting from "./Greeting";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// creates a suite
// category
// multiple tests per suite in the anonymous function
describe("<Greeting/>", () => {
  test("renders and sees if 'hello world' is visible", () => {
    // Arrange
    render(<Greeting></Greeting>);

    // Act
    // ...nothing

    // Assert
    // find/get/query
    // get throws error if not found
    // find returns promise - eventually on the screen
    // exact: false --> case insensitive, substring
    const helloWorldElement = screen.getByText("Hello World!", { exact: true });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting></Greeting>);
    const outputElem = screen.getByText("good to see you", { exact: false });
    expect(outputElem).toBeInTheDocument();
  });

  test("renders 'Changed' if the button WAS clicked", () => {
    // Arrange
    render(<Greeting></Greeting>);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElem = screen.getByText("Changed!", { exact: true });
    expect(outputElem).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button WAS clicked", () => {
    // Arrange
    render(<Greeting></Greeting>);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    // will return null if not found
    const outputElem = screen.queryByText("good to see you", { exact: false });
    expect(outputElem).toBeNull();
  });
});
