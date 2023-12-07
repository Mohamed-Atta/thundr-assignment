// useCounter.test.tsx
import { renderHook } from "@testing-library/react";
import { useFetchTickers } from "./useFetchTickers";
import { waitFor } from "@testing-library/react";

describe("useFetchTickers", () => {
  it("should return the stock with ticker A", async () => {
    const { result } = renderHook(useFetchTickers, {
      initialProps: { limit: 10, searchValue: "A" },
    });
    await waitFor(
      () =>
        expect(result.current.tickers[0].name).toBe(
          "Agilent Technologies Inc."
        ),
      {
        timeout: 3000,
      }
    );
  });

  it("should return n items when limit is set to n", async () => {
    const { result } = renderHook(useFetchTickers, {
      initialProps: { limit: 20, searchValue: "" },
    });
    await waitFor(() => expect(result.current.tickers.length).toBe(20), {
      timeout: 2000,
    });
  });
});
