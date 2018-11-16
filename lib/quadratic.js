export function easeIn(t) {
	return t * t
}

export function easeOut(t) {
	return -t * (t - 2)
}

export function easeInOut(t) {
	// return (t *= 2) < 1
	// 	? (t * t) / 2
	// 	: -(--t * (t - 2) - 1) / 2
	return t < 0.5
		? t * t * 2
		: -((t * 2 - 1) * (t * 2 - 3) - 1) / 2
}
