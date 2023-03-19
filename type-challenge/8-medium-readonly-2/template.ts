/* type MyReadonly2<T, K extends keyof T as keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
    readonly [I in K]: T[I]
  } */

type MyReadonly2<T, K extends keyof T = keyof T> = MyReadonly<Pick<T, K>> & MyOmit<T, K>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}
type AS = MyReadonly2<Todo1, 'title' | 'description'>
