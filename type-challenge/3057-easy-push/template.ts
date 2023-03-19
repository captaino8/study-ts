type Push<T extends any[], U> = [U] extends [T[number]] ? T : [...T, U]
 type V = Push<['1', 2, '3'], '3'>
