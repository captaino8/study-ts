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
  describe("any 类型", () => {
    describe("赋值任意类型", () => {
      let obj: any = 0;
      obj = "hello";
      obj = 100;
    })
    describe("可以获取它的任意属性或调用它的任意函数", () => {
      let obj: any = 0;
      console.log(obj.foo)
      obj.get()
    })
    describe("未指定一个类型，TypeScript 也不能从上下文推断出它的类型，编译器就会默认设置为 any 类型", () => {
      let foo
      foo = 123
    })
  })
  describe("null", () => {
    const nullVal: null = null;
    expectType<null>(nullVal);
  });

  describe("undefined", () => {
    const undefinedVal: undefined = undefined;
    expectType<undefined>(undefinedVal);
    expectError<null>(undefinedVal);
  });

  describe("undefined 和 null 是所有类型的子类型", () => {
    expectType<number>(undefined);
    expectType<string>(undefined);
    expectType<boolean>(undefined);
    expectType<void>(undefined);

    expectType<number>(null);
    expectType<string>(null);
    expectType<boolean>(null);
    expectType<void>(null);
  });
})
