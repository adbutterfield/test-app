import { renderApp, screen } from "./testEnv";

test("test something", async () => {
  const { user } = renderApp();

  expect(screen.getByTestId("status")).toHaveTextContent("not clicked");

  await user.click(screen.getByText("link"));

  expect(screen.getByTestId("status")).toHaveTextContent("clicked");
});
