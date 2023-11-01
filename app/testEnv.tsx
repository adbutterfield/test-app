import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

export function renderApp(options?: any) {
  return {
    ...render(<Home />),
    user: userEvent.setup({ document, ...options }),
  };
}

export { waitFor, screen } from "@testing-library/react";
