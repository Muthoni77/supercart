import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/pages/auth/login";

import { Provider } from "react-redux";
import { store } from "@/features/store/store";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("check if login btn is present", () => {
  useRouter.mockImplementation(() => ({
    route: "/login",
    pathname: "/login",
    query: "",
    asPath: "",
  }));
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const loginBtn = screen.getByTestId("btnLogin");

  expect(loginBtn).toBeInTheDocument();
});
