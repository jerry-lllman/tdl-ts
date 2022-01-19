// T extends Promise<any> 首先判断传参得是来自 Promise<any> 的类型
type MyAwaited<T extends Promise<any>> = 
	T extends Promise<infer R> // 1. infer 推断 any 为 R 类型。 2. 判断 T 是否来自 Promise<infer R>
		? R extends Promise<any> // 看 R 是不是也是 Promise 类型
			? MyAwaited<R> // R extends Promise<any> 判断成功则递归调用
			: R // 直接返回类型
		: T // T 不是继承自 Promise<infer R> 直接返回 T