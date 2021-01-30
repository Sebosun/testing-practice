const calculator = require("./calculator") 

test('adds two numbers', () => {
	expect(calculator('add', 2, 5)).toBe(7)
})

test('adds two numbers', () => {
	expect(calculator('add', 3, 6)).toBe(9)
})

test('subjects two number from each other', () => {
	expect(calculator('subject', 11, 7)).toBe(4)
})

test('subjects two number from each other', () => {
	expect(calculator('subject', 10, 5)).toBe(5)
})

test('multiplies two numbers', () => {
	expect(calculator('multiply', 3, 6)).toBe(18)
})

test('multiplies two numbers', () => {
	expect(calculator('multiply', 2, 5)).toBe(10)
})

test('divides two numebrs', () => {
	expect(calculator('divide', 6, 3)).toBe(2)
})

test('divides two numebrs', () => {
	expect(calculator('divide', 5, 2)).toBe(2.5)
})
