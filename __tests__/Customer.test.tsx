import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";
import Customer from "../src/components/Customer";
import { CUSTOMER_SCREEN } from "../src/screens/Customer";

jest.mock("@react-navigation/native");

const mockNavigate = jest.fn();

const customer = {
  id: "1",
  name: "Ishak Ertem",
  email: "ertemishakk@gmail.com",
  role: "Admin",
};

describe("Customer Component", () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = render(<Customer customer={customer} />);
    expect(getByText("I")).toBeTruthy();
    expect(getByText("Ishak Ertem")).toBeTruthy();
    expect(getByText("Admin")).toBeTruthy();
  });

  it("navigates to the customer screen on button press", () => {
    const { getByText } = render(<Customer customer={customer} />);
    fireEvent.press(getByText("Ishak Ertem"));
    expect(mockNavigate).toHaveBeenCalledWith(CUSTOMER_SCREEN, { id: "1" });
  });
});
