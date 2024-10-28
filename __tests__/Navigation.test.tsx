import React from "react";
import { render } from "@testing-library/react-native";
import { useAppDispatch } from "../src/app/hooks";
import Navigation from "../src/navigation/Navigation";
import { boot } from "../src/thunks/boot";

jest.mock("../src/app/hooks", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("../src/thunks/boot");
jest.mock("aws-amplify/data");
jest.mock("@react-navigation/native-stack");

jest.mock("../src/navigation/DefaultNavigation", () => {
  return jest.fn(() => <div>Mock Default Navigation</div>);
});

describe("Navigation Component", () => {
  const mockDispatch = jest.fn();
  const mockUseAppDispatch = useAppDispatch as unknown as jest.Mock;

  beforeEach(() => {
    mockUseAppDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches boot action on mount", () => {
    render(<Navigation />);
    expect(mockDispatch).toHaveBeenCalledWith(boot());
  });
});
