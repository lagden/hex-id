'use strict'

const NUM = (typeof process === 'object' && process.pid) || Math.random()
const PID = Math.floor(NUM * 100000) % 0xFFFF
const MID = Math.floor(Math.random() * 0xFFFFFF)

let cc = Math.floor(Math.random() * 0xFFFFFF)

function _next() {
	cc += 1 % 0xFFFFFF
	return cc
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
	const time = parseInt(Date.now() / 1000, 10) % 0xFFFFFFFF
	return `${_toHex(8, time)}${_toHex(6, MID)}${_toHex(4, PID)}${_toHex(6, _next())}`
}

module.exports = hexID
