/* eslint capitalized-comments: 0 */
/* eslint import/extensions: 0 */

'use strict'

import test from 'ava'
import hexID from '../index.mjs'

test('basic', t => {
	const idA = hexID()
	const idB = hexID()
	t.is(idA.length, 24)
	t.is(idB.length, 24)
	t.not(idA, idB)
})
