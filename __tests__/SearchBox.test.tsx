import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useAppDispatch } from "../src/app/hooks";
import SearchBox from "../src/components/SearchBox";
import { setSearch } from "../src/reducers/search";

jest.mock("../src/app/hooks", () => ({
  useAppDispatch: jest.fn(),
}));

describe("SearchBox Component", () => {
  const mockDispatch = jest.fn();
  const mockUseAppDispatch = useAppDispatch as unknown as jest.Mock;

  beforeEach(() => {
    mockUseAppDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly and updates input value", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText("Search Customer");

    expect(input).toBeTruthy();
    fireEvent.changeText(input, "Ishak");
    expect(input.props.value).toBe("Ishak");
  });

  it("dispatches setSearch action on submit", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText("Search Customer");

    fireEvent.changeText(input, "Ishak Ertem");
    fireEvent(input, "submitEditing");

    expect(mockDispatch).toHaveBeenCalledWith(setSearch("Ishak Ertem"));
  });
});
