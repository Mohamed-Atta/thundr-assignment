import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchInput from "./SearchInput";
import "@testing-library/jest-dom/extend-expect";
import * as hooks from "../../hooks/useFetchTickers";

describe("Search Input", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <SearchInput handleSearch={setSearch} />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const searchInput: any = queryByPlaceholderText("Search for stocks");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
