import test from 'ava'
import hexID from '..'

test('basic', t => {
	const re = /[\da-f]{24}/
	const idA = hexID()
	const idB = hexID()
	t.is(idA.length, 24)
	t.is(idB.length, 24)
	t.not(idA, idB)
	t.true(re.test(idA))
	t.true(re.test(idB))
})
