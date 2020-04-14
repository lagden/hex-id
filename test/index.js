'use strict'

const test = require('ava')
const hexID = require('../src')

test('basic', t => {
	const re = /[\da-f]{24}/
	const idA = hexID()
	const idB = hexID()
	t.is(idA.length, 24)
	t.is(idB.length, 24)
	t.not(idA, idB)
	t.regex(idA, re)
	t.regex(idB, re)
})
