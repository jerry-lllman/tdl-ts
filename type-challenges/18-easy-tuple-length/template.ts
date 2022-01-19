// 这题要求的是数组
// 数组的特性是 key 是仅读的，并且含有 length 属性
type Length<T extends {readonly [x: number]: any; length: number;}> = T['length'] 