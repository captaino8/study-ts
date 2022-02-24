import { expectType } from 'tsd'
import { describe } from '..'

describe("接口", () => {
  describe("接口声明", () => {
    interface Point {
      x: number;
      y: number;
    }

    function printCoord(pt: Point) {
      console.log("The coordinate's x value is " + pt.x);
      console.log("The coordinate's y value is " + pt.y);
    }

    printCoord({ x: 100, y: 100 });
  })
  describe("接口可扩展", () => {
    // 通过继承扩展类型
    interface Animal {
      name: string
    }

    interface Bear extends Animal {
      honey: boolean
    }
    const bear: Bear = {
      name: 'Veney',
      honey: true
    }
    console.log(bear)
  })
  describe("添加新的属性", () => {
    interface Window {
      title: string
    }

    interface Window {
      ts: number
    }
    const ws: Window = {
      title: 'main',
      ts: 1
    }
  })
})
