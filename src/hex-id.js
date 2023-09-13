/**
 * Generates a random integer between 0 (inclusive) and the specified maximum value (exclusive).
 *
 * @param {number} max - The exclusive maximum value for the generated integer.
 * @returns {number} - A random integer between 0 (inclusive) and `max` (exclusive).
 */
function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}

/**
 * Generates an array of 5 random Uint8 values.
 *
 * @returns {Uint8Array} - An array containing 5 random Uint8 values.
 */
function getRandomValues() {
	const uint8 = new Uint8Array(5)
	for (const [k] of uint8.entries()) {
		uint8[k] = getRandomInt(999)
	}
	return uint8
}

// A random process unique value
const PROCESS_UNIQUE = getRandomValues()

// Initialize a random counter value
let cc = Math.floor(Math.random() * 0xffffff)

/**
 * Generates the next counter value.
 *
 * @returns {number} - The next counter value.
 */
function _next() {
	cc += 1 % 0xffffff
	return cc
}

/**
 * Converts a DataView to a hexadecimal string.
 *
 * @param {DataView} view - The DataView to convert.
 * @returns {string} - A hexadecimal string representation of the DataView.
 */
function _toHex(view) {
	const arr = []
	const len = view.byteLength
	for (let i = 0; i < len; i++) {
		arr.push(view.getUint8(i).toString(16).padStart(2, '0'))
	}

	return arr.join('')
}

/**
 * Generates a unique process identifier.
 *
 * @returns {string} - A unique process identifier as a hexadecimal string.
 */
export default function hexID() {
	const time = ~~(Date.now() / 1000)
	const inc = _next()
	const buffer = new ArrayBuffer(12)
	const view = new DataView(buffer)

	// 4-byte timestamp
	view.setUint8(3, time & 0xff)
	view.setUint8(2, (time >> 8) & 0xff)
	view.setUint8(1, (time >> 16) & 0xff)
	view.setUint8(0, (time >> 24) & 0xff)

	// 5-byte process unique
	view.setUint8(4, PROCESS_UNIQUE[0])
	view.setUint8(5, PROCESS_UNIQUE[1])
	view.setUint8(6, PROCESS_UNIQUE[2])
	view.setUint8(7, PROCESS_UNIQUE[3])
	view.setUint8(8, PROCESS_UNIQUE[4])

	// 3-byte counter
	view.setUint8(11, inc & 0xff)
	view.setUint8(10, (inc >> 8) & 0xff)
	view.setUint8(9, (inc >> 16) & 0xff)

	return _toHex(view)
}
