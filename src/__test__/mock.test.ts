import React from "react";
import axios from "axios";
import mock from "../components/Mock";
import { mocked } from "jest-mock";

jest.mock("axios");

// 10 | Mock: 怎么替代不那么重要的逻辑？
describe("examples for mock", () => {
  test("a test for global mock", async () => {
    const res = "this is a test for global mock";
    // axios.get.mockResolvedValue(res);
    mocked(axios.get).mockResolvedValue(res);
    const data = await axios.get("/");
    expect(data).toBe("this is a test for global mock");
  });

  test("a test for single mock", () => {
    jest.doMock("../components/Mock", () => ({
      __esModule: true,
      getMockData: () => {
        return "newMockData";
      },
    }));
    // expect(mock.getMockData()).toBe("newMockData");
    const mock = require("../components/Mock");
    expect(mock.getMockData()).toBe("newMockData");
  });

  test("other ways for single mock", () => {
    jest.spyOn(mock, "getMockData").mockReturnValue("newMockData");
    expect(mock.getMockData()).toBe("newMockData");
  });
});
