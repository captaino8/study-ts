import { describe } from "..";

describe("Object", () => {
  describe("接口和别名", () => {
    // 接口
    interface Person {
      name: string;
      age: number;
    }

    function greet(person: Person) {
      return "Hello " + person.name;
    }
    describe("别名", () => {
      type Person = {
        name: string;
        age: number;
      };

      function greet(person: Person) {
        return "Hello " + person.name;
      }
    })
    describe("可选属性", () => {
      interface Shape { }
      interface PaintOptions {
        shape: Shape;
        xPos?: number;
        yPos?: number;
      }

      function paintShape(opts: PaintOptions) {
        // ...
      }
    })

    describe("readonly", () => {
      describe("interface & type", () => {
        type Foo = {
          readonly bar: number;
          readonly bas: number;
        };

        const foo: Foo = { bar: 1, bas: 2 };

        // 不可以修改
        foo.bar = 2;
      });
      describe("索引签名标记为只读", () => {
        interface Foo {
          readonly [x: number]: number;
        }

        const foo: Foo = {
          0: 123,
          1: 456,
        };

        // 报错 不允许修改
        foo[0] = 2222;
      });
      describe("ReadOnly 映射类型", () => {
        type Foo = {
          bar: number;
          bas: number;
        };

        // 把 Foo 里面所有的 key 都变成 readonly
        type FooReadOnly = Readonly<Foo>;

        const foo: FooReadOnly = {
          bar: 1,
          bas: 2,
        };

        // 不可以被修改了
        foo.bar = 2;
      });
      describe("ReadonlyArray 类型，描述不应该更改的数组", () => {
        function doStuff(values: ReadonlyArray<string>) {
          // We can read from 'values'...
          const copy = values.slice();
          console.log(`The first value is ${values[0]}`);

          // ...but we can't mutate 'values'.
          values.push("hello!");
        }
      })
    })
  })
})
