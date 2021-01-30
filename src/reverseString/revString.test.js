const reverseString = require('./revString')

test('reverses an input string', () => {
	expect(reverseString('dupa')).toBe('apud')
})

test('reverses an input string', () => {
	expect(reverseString('finnegan string')).toBe('gnirts nagennif')
})