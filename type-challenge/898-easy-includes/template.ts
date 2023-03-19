type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// Key Remapping in Mapped Types (since TS 4.1)
// type Includes<T extends readonly any[], U> = {} extends {
//   [K in keyof T as Equal<T[K], U> extends true ? K : never]: T[K];
// } ? false : true

type Includes<T extends readonly any[], U> = {} extends {
  [K in keyof T as Equal<T[K], U> extends true ? K : never]: T[K]
} ? false : true

type A = Equal<2, true>
