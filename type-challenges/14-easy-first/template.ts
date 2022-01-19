// length 为 0 就是 never
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]