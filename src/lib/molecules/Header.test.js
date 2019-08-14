import React from "react";
import { cleanup } from "react-testing-library";
import Header from "./Header";
import renderWithTheme from "../../utils/renderWithTheme";

afterEach(cleanup);

describe("Given default props", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderWithTheme(<Header />);
  });

  it("should render correctly", () => {
    expect(wrapper.container).toBeDefined();
  });
});

describe("Given a child prop is passed in", () => {
  let wrapper,
    value = "Some button text";

  beforeEach(() => {
    wrapper = renderWithTheme(<Header>{value}</Header>);
  });

  it("should render correctly", () => {
    expect(wrapper.container).toBeDefined();
  });

  it("should display the child content inside the button", () => {
    expect(wrapper.getByText(value)).toBeDefined();
  });
});
