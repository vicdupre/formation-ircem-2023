import counterSlice, {
  decrement,
  increment,
  reset,
} from "../../redux/slices/counterSlice";

test("is initialized with default state", () => {
  expect(counterSlice(0, { type: undefined })).toEqual(0);
});

test("handles incremement action correctly", () => {
  expect(counterSlice(0, increment())).toEqual(1);
});

test("handles decrement action correctly", () => {
  expect(counterSlice(10, decrement())).toEqual(9);
});

test("handles reset action correctly", () => {
  expect(counterSlice(237, reset())).toEqual(0);
});
