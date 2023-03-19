import { describe } from "..";

describe("泛型 generics", () => {
  describe("泛型约束", () => {
    interface Lengthwise {
      length: number
    }
    function loggingIdentify<T extends Lengthwise>(arg: T) {
      console.log(arg.length)
    }

    interface heihei {
      // length: number,
      name: string
    }
    const hei: heihei = {
      // length: 3,
      name: 'hei'
    }
    loggingIdentify(hei)
  })
  describe("通用类型", () => {
    function identify<Type>(arg: Type): Type {
      return arg
    }
    let myIdentify: <Type>(arg: Type) => Type = identify
  })
  describe("对象类型的调用签名的形式", () => {
    function identity<Type>(arg: Type): Type {
      return arg;
    }

    let myIdentity: { <Type>(arg: Type): Type } = identity;
  })
  describe("Generic Classes泛型类", () => {
    class GenericNumber<Type> {
      zeroValue: Type;
      add: (x: Type, y: Type) => Type;
    }
    let myGenericNumber = new GenericNumber<number>()
    myGenericNumber.zeroValue = 0
    myGenericNumber.add = function (x, y) {
      return x + y
    }
  })
  describe("泛型约束中使用类型参数", () => {
    function getProperty<Type, K extends keyof Type>(obj, key) {
      return obj[key]
    }

    const x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, 'a')
  })
  describe("泛型中使用类类型", () => {
    function create<Type>(c: { new(): Type }): Type {
      return new c();
    }

    class BeeKeeper {
      hasMask: boolean = true;
    }

    class ZooKeeper {
      nametag: string = "Mikle";
    }

    class Animal {
      numLegs: number = 4;
    }

    class Bee extends Animal {
      keeper: BeeKeeper = new BeeKeeper();
    }

    class Lion extends Animal {
      keeper: ZooKeeper = new ZooKeeper();
    }

    function createInstance<A extends Animal>(c: new () => A): A {
      return new c();
    }

    createInstance(Lion).keeper.nametag;
    createInstance(Bee).keeper.hasMask;
  })
})
