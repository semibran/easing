export function easeIn(t) {
	return t * t * t
}

export function easeOut(t) {
	return --t * t * t + 1
}

export function easeInOut(t) {
	return t < 0.5
		? t * t * t * 4
		: ((t = t * 2 - 2) * t * t + 2) / 2
}
