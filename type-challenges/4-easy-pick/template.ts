
// K extends 都来自于 T
// keyof 表示遍历检测该项是否存在于 T 内

type MyPick<T, K extends keyof T> = { // 直接返回 一个 object。 相当于 return { key: value, .... }
	[P in K]: T[P] // 遍历 K 获取 在 T 内对应的的值  就是 key: value
}

// 对应 js 代码
function myPick(obj: object, keys: string[]) {
	const res = {} // 需要返回一个 object
	keys.forEach(key => { // 遍历需要的 keys
		if (key in obj) { // 判断该 key 是否在 obj 内
			res[key] = obj[key] // 将需要的 key 添加到 res 内
		}
	})
	return res
}

const obj = {
	title: 'string',
	name: 'number'
}

console.log(myPick(obj, ['title']))

const res = {
	title: 'string'
}