// type If<C extends boolean, T, F> = C extends true ? T : F
type If<C extends boolean, T, F> = C extends true ? T : F;

// 开启 strictNullChecks 检测
// type error = If<null, 'a', 'b'>
