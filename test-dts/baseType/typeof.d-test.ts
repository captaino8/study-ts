import { describe } from "..";

describe("获取类型", () => {
  describe("捕获变量的类型", () => {
    let foo = 123;
    let bar: typeof foo;
    // 报错  因为 typeof foo 的类型是 number
    bar = "123";
    bar = 444;
  });
  describe("捕获类成员的类型", () => {
    class Foo {
      foo: number;
    }

    let _foo: Foo;
    let bar: typeof _foo.foo;

    bar = 123;
    bar = "123"; // 报错 因为已经是 number 类型了
  });
  describe("捕获数组类型的key", () => {
    const myArray = [
      { name: 'Allen', age: 15 },
      { name: 'Alice', age: 16 },
    ]
    type Person = typeof myArray[number]
  })
  describe("ReturnType 返回类型", () => {
    function sum(a: number, b: number): number {
      return a + b
    }
    type P = ReturnType<typeof sum>
  })
})
