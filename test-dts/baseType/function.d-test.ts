import { expectError, expectType } from "tsd";
import { describe } from "../index";

describe("function", () => {
  describe("参数类型注解，函数声明", () => {
    function greet(name: string) {
      console.log("Hello, " + name.toUpperCase() + "!!");
    }
    greet(23)
  })
  describe("返回值类型注解", () => {
    function getFavoriteNumber(): number {
      return 26;
    }
    const num = getFavoriteNumber()
    expectType<number>(num)
  })
  describe("匿名函数或函数表达式", () => {
    describe("自动推论", () => {
      const sum = (a: number, b: number) => {
        return a + b
      }
      // result 的类型是被自动推导出来的，上下文推断
      const result = sum(1, 2)
      expectType<number>(result)
    })
    describe("手动添加函数类型", () => {
      const sum: (a: number, b: number) => number = (a, b) => {
        return a + b
      }
      const result = sum(1, 2)
      expectType<number>(result)
    })
    describe("对象类型", () => {
      // 定义对象类型可用',' 或 ';' 分隔，若不指定则默认为 any
      // The parameter's type annotation is an object type
      function printCoord(pt: { x: number; y: number }) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
      }
      printCoord({ x: 3, y: 7 });
    })
    describe("对象类型，可选属性", () => {
      // 定义对象类型可用',' 或 ';' 分隔，若不指定则默认为 any
      // 要使用时需要判断可选属性是否存在
      function printName(obj: { first: string; last?: string }) {
        return obj.first + obj.last
      }
      // Both OK
      printName({ first: "Bob" });
      printName({ first: "Alice", last: "Alisson" });
    })
    
  })
})
