'use strict'

import test from 'ava'
import hexID from '..'

test('basic', t => {
	const idA = hexID()
	const idB = hexID()
	t.is(idA.length, 24)
	t.is(idB.length, 24)
	t.not(idA, idB)
})
