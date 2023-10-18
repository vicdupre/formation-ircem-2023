import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import TestsProviders from "../../utils/TestProviders";
import App from "../../App";

test("displays Vite + React", async () => {
  render(<App />, {
    wrapper: TestsProviders,
  });

  await waitForElementToBeRemoved(
    () => screen.getByTestId("fakeStoreLoading"),
    {
      timeout: 2000,
    }
  );

  const titleElement = await screen.findByText(/vite \+ react/i);

  expect(titleElement).toBeInTheDocument();
});
