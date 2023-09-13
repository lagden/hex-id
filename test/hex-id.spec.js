import test from 'node:test'
import assert from 'node:assert'
import hexID from '../src/hex-id.js'

test('hexID', () => {
	const re = /[\da-f]{24}/
	const idA = hexID()
	const idB = hexID()

	assert.equal(idA.length, 24)
	assert.equal(idB.length, 24)
	assert.notEqual(idA, idB)
	assert.match(idA, re)
	assert.match(idB, re)
})
