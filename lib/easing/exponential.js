export function easeIn(t) {
	return Math.pow(2, 10 * (t - 1))
}

export function easeOut(t) {
	return -Math.pow(2, -10 * t) + 1
}

export function easeInOut(t) {
	return t < 0.5
		? easeIn(t * 2) / 2
		: (easeOut(t * 2 - 1) + 1) / 2
}
