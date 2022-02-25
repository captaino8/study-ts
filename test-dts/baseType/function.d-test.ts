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
    describe("函数表达式表示类型", () => {
      // (a: string) => void 用函数类型表达式表示
      function greeter(fn: (a: string) => void) {
        fn("Hello, World");
      }

      function printToConsole(s: string) {
        console.log(s);
      }

      greeter(printToConsole);
    })
    describe("使用类型别名命名函数类型", () => {
      type GreetFunction = (a: string) => void
      function greeter(fn: GreetFunction) {
        fn('s')
      }
    })
    describe("有属性的函数添加类型", () => {
      // 此时参数和返回值间用冒号 : 连接
      type DescribableFunction = {
        description: string,
        (someArg: number): void
      }
      function doSomething(fn: DescribableFunction) {
        fn.description = 'example'
        fn(123)
      }
      // 构造函数签名
      type SomeObject = any;
      type SomeConstructor = {
        new(s: string): SomeObject;
      };
      function fn(ctor: SomeConstructor) {
        return new ctor("hello");
      }
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
    describe("通用类型", () => {
      function firstElement<Type>(arr: Type[]): Type | undefined {
        return arr[0];
      }
      const s = firstElement([1, 2, 3]) // number
      const n = firstElement(['33', 'dd', 'ff']) // string
      const u = firstElement([]) // undefined
    })

    describe("利用重载", () => {
      // 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
      // 必须是匹配前面的条件之一，最后为实现签名还必须与前面的重载签名兼容
      function reverse(x: number): number;
      function reverse(x: string): string;
      function reverse(x: number | string): number | string {
        if (typeof x === "number") {
          return Number(x.toString().split("").reverse().join(""));
        } else if (typeof x === "string") {
          return x.split("").reverse().join("");
        }
      }

      const result = reverse("hei");
      expectType<string>(result);
      expectError<number>(result);
    });

    describe("rest 参数", () => {
      function multiply(n: number, ...m: number[]) {
        return m.map((x) => n * x);
      }
      // 'a' gets value [10, 20, 30, 40]
      const a = multiply(10, 1, 2, 3, 4);
    })
  })
})
