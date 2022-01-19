type MyReadonly<T> = {
	// 让这个变成一个只读的 key，同样需要通过 keyof 判断 key 是否在 T 里面
	readonly [P in keyof T]: T[P]
}
