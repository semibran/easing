export function easeIn(t) {
	return Math.pow(2, 10 * (t - 1))
}

export function easeOut(t) {
	return -Math.pow(2, -10 * t) + 1
}

export function easeInOut(t) {
	return (t = t * 2 - 1) < 0
		? Math.pow(2, 10 * t) / 2
		: (-Math.pow(2, -10 * t) + 2) / 2
}
