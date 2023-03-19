type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type BB = {[P in keyof Todo]: P}
