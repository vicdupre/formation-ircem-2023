import { render, renderHook, screen, waitFor } from "@testing-library/react";
import Products from "../../pages/Products";
import TestsProviders from "../../utils/TestProviders";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { useFakeStore } from "../../contexts/FakeStoreContext";
import { act } from "react-dom/test-utils";

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

test("should load data from api", async () => {
  const { result } = renderHook(() => useFakeStore(), {
    wrapper: TestsProviders,
  });
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  expect(result.current).toEqual([
    { title: "Test1", id: 1 },
    { title: "Test2", id: 2 },
  ]);
});
