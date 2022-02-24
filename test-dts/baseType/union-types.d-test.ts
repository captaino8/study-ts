import { expectType } from 'tsd'
import { describe } from '..'

describe("联合类型", () => {
  describe("simple union type", () => {
    let foo: number | string
    foo = 1
    foo = 'example'
  })
  describe("只能访问联合类型上共同存在的属性", () => {
    let foo: number | string
    describe("访问报错", () => {
      console.log(foo.length)
    })
    describe("正确使用", () => {
      console.log(foo.toString())
    })
  })
  describe("上下文推断,类型推论",()=>{
    let foo : number|string
    // 类型被推导为 string
    foo = 'example'
    console.log(foo.length)
    // 类型被推导为 number
    foo = 2
    console.log(foo.length)
  })
})
