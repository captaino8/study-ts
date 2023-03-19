import { describe } from "..";

describe("keyof", () => {
  describe("获取一个类型的所有键值，并返回一个联合类型", () => {
    type Person = {
      name: string;
      age: number;
    }
    // PersonKey 得到的类型是 'name' | 'age' 的联合类型
    type PersonKey = keyof Person
  })
  describe("类型是字符串或数字，将返回这些类型", () => {
    type Arrayish = {
      [n: number]: number
    }
    // number
    type A = keyof Arrayish

    type Mapish = { [k: string]: string }
    // string | number
    type B = keyof Mapish
  })
})
