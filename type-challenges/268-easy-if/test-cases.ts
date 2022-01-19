import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyIf<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<MyIf<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = MyIf<null, 'a', 'b'>