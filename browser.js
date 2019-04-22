/* globals window */

const PROCESS_UNIQUE = window.crypto.getRandomValues(new Uint8Array(5))
let cc = Math.floor(Math.random() * 0xFFFFFF)

function _next() {
	cc += 1 % 0xFFFFFF
	return cc
}

function _toHex(view) {
	const arr = []
	const len = view.byteLength
	for (let i = 0; i < len; i++) {
		arr.push(view.getUint8(i).toString(16).padStart(2, '0'))
	}

	return arr.join('')
}

function hexID() {
	const time = ~~(Date.now() / 1000)
	const inc = _next()
	const buffer = new ArrayBuffer(12)
	const view = new DataView(buffer)

	// 4-byte timestamp
	view.setUint8(3, time & 0xFF)
	view.setUint8(2, (time >> 8) & 0xFF)
	view.setUint8(1, (time >> 16) & 0xFF)
	view.setUint8(0, (time >> 24) & 0xFF)

	// 5-byte process unique
	view.setUint8(4, PROCESS_UNIQUE[0])
	view.setUint8(5, PROCESS_UNIQUE[1])
	view.setUint8(6, PROCESS_UNIQUE[2])
	view.setUint8(7, PROCESS_UNIQUE[3])
	view.setUint8(8, PROCESS_UNIQUE[4])

	// 3-byte counter
	view.setUint8(11, inc & 0xFF)
	view.setUint8(10, (inc >> 8) & 0xFF)
	view.setUint8(9, (inc >> 16) & 0xFF)

	return _toHex(view)
}

export default hexID
