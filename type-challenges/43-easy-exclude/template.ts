// 从头 T 中排除掉 U 的类型
type MyExclude<T, U> = T extends U ? never : T