type Concat<T extends any[], U extends any[]> = [...T, ...U]


type Concat1<T, U> = T extends [...infer K] ? U extends [...infer P] ? [...K, ...P] : [] : []