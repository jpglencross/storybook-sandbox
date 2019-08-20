import React from "react";
import { cleanup, render } from "react-testing-library";
import Button from "./Button";

afterEach(cleanup);

describe("Given default props", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Button />);
  });

  it("should render correctly", () => {
    expect(wrapper.container).toBeDefined();
  });
});

describe("Given a child prop is passed in", () => {
  let wrapper,
    value = "Some button text";

  beforeEach(() => {
    wrapper = render(<Button>{value}</Button>);
  });

  it("should render correctly", () => {
    expect(wrapper.container).toBeDefined();
  });

  it("should display the child content inside the button", () => {
    expect(wrapper.getByText(value)).toBeDefined();
  });
});
