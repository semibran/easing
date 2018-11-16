export function easeIn(t) {
	return t * t * t
}

export function easeOut(t) {
	return Math.pow(t - 1, 3) + 1
}

export function easeInOut(t) {
	return t < 0.5
		? easeIn(t * 2) / 2
		: (easeOut(t * 2 - 1) + 1) / 2
}
