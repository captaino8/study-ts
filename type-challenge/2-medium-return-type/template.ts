type MyReturnType<T extends (...args) => any> = T extends (...args) => infer P ? P : never
