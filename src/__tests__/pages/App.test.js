import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import TestsProviders from "../../utils/TestProviders";
import App from "../../App";
import "@testing-library/jest-dom";

test("displays Vite + React", async () => {
  render(<App />, {
    wrapper: TestsProviders,
  });
  /*   const loader = screen.getByText(/chargement/i);

  await waitForElementToBeRemoved(loader);
 */
  const titleElement = await screen.findByText(/vite \+ react/i);

  expect(titleElement).toBeInTheDocument();
});
