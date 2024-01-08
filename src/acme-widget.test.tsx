import React from "react";
import { screen, render } from "@testing-library/react";

import { AcmeWidget } from "./acme-widget";

describe("AcmeWidget", () => {
  it("should render the component", () => {
    render(<AcmeWidget contentLanguage="en_US" quote="World" />);

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
