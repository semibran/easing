export function easeIn(t) {
	return t * t * t
}

export function easeOut(t) {
	return Math.pow(t - 1, 3) + 1
}

export function easeInOut(t) {
	return t < 0.5
		? t * t * t * 4
		: (Math.pow(t * 2 - 2, 3) + 2) / 2
}
