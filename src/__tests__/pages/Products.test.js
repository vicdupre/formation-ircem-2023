import { render, screen, waitFor } from "@testing-library/react";
import Products from "../../pages/Products";
import TestsProviders from "../../utils/TestProviders";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(
      ctx.json([
        { title: "Test1", id: 1 },
        { title: "Test2", id: 2 },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("it displays the list of products", async () => {
  render(<Products />, {
    wrapper: TestsProviders,
  });

  const test1 = await screen.findByText(/test1/i);
  const test2 = await screen.findByText(/test2/i);

  expect(test1).toBeInTheDocument();
  expect(test2).toBeInTheDocument();
});
