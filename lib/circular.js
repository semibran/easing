export function easeIn(t) {
	return -(Math.sqrt(1 - t * t) - 1)
}

export function easeOut(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1))
}

export function easeInOut(t) {
	return t < 0.5
		? -(Math.sqrt(1 - Math.pow(t * 2, 2)) - 1)/ 2
		: (Math.sqrt(1 - Math.pow(t * 2 - 2, 2)) + 1) / 2
}
