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
  describe("array", () => {
    describe("类型 + 方括号 表示法", () => {
      let arr: number[] = [1, 2, 3]
    })
    describe("错误示例", () => {
      describe("不能出现其他类型", () => {
        let items: string[] = [1, "b", "c"];
      })
      describe("不能 push 其它类型", () => {
        let items: string[] = ['ws', 'wd']
        items.push(1)
      })
    })
    describe("泛型表示法", () => {
      let arr: Array<number> = [1, 2, 3]
    })
  })
})
