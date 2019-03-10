'use strict'

const NUM = typeof process !== 'undefined' ? process.pid : Math.random()
const PID = Math.floor(NUM * 100000) % 0xFFFF
const MID = Math.floor(Math.random() * 0xFFFFFF)

let idx = Math.floor(Math.random() * 0xFFFFFF)

function _next() {
	idx += 1 % 0xFFFFFF
	return idx
}

function _toHex(length, n) {
	return n.toString(16).padStart(length, '0')
}

/**
 * Generate an ID (24 character hex string)
 *
 * @returns {string} returns a valid 24 character ObjectID hex string.
 */
function hexID() {
	const time = Math.floor(Math.random() / 1000) % 0xFFFFFFFF
	return `${_toHex(8, time)}${_toHex(6, MID)}${_toHex(4, PID)}${_toHex(6, _next())}`
}

export default hexID
