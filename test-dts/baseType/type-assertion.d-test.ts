import { expectType } from "tsd";
import { describe } from "..";

describe("类型断言", () => {
  describe("将一个联合类型断言为其中一个", () => {
    interface Cat {
      name: string;
      run(): void;
    }
    interface Fish {
      name: string;
      swim(): void;
    }
    function getName(animal: Cat | Fish) {
      return animal.name
    }
    // 只能访问共同的属性
    function isFish(animal: Cat | Fish) {
      if (typeof animal.swim === 'function') {
        return true
      }
      if (typeof (animal as Fish).swim === 'function') {
        return true
      }
      return false
    }
  })
  describe("双重断言", () => {
    // 类型断言仅能转换为一个更加具体或者更不具体的类型
    // 基于任何类型都可以被断言为 any ,而any 可以被断言为任何类型
    // 我们就可以绕过断言的限制
    const expr = 'sd'
    type T = string
    const a = (expr as any) as T;
  })
  describe("非空断言", () => {
    function liveDangerously(x?: number | null) {
      // 后缀 ! 表示它的值不可能是 null 或者 undefined
      console.log(x!.toFixed());
    }
  })
})
