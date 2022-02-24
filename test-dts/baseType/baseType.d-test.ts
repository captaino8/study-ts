import { expectError, expectType } from "tsd";
import { describe } from "../index";

describe("基础类型", () => {
  describe("boolean", () => {
    const boo = true;
    expectType<boolean>(boo);
  });
  describe("number", () => {
    const num = 1;
    expectType<number>(num);
  });

  describe("string", () => {
    const str = "123";
    expectType<string>(str);
  });
})
