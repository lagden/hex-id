'use strict'

const MID = Math.floor(Math.random() * 0xFFFFFF)
const PID = Math.floor(Math.random() * 100000) % 0xFFFF

let idx = parseInt(Math.random() * 0xFFFFFF, 10)

function _next() {
	idx += 1 % 0xFFFFFF
	return idx
}

function _hex(length, n) {
	return n.toString(16).padStart(length, '0')
}

/**
 * Generate an ID (24 character hex string)
 *
 * @returns {string} returns a valid 24 character ObjectID hex string.
 */
function hexID() {
	const time = parseInt(Date.now() / 1000, 10) % 0xFFFFFFFF
	return `${_hex(8, time)}${_hex(6, MID)}${_hex(4, PID)}${_hex(6, _next())}`
}

module.exports = hexID
