export function easeIn(t) {
	return Math.cos(Math.PI + Math.PI / 2 * t) + 1
}

export function easeOut(t) {
	return Math.sin(Math.PI / 2 * t)
}

export function easeInOut(t) {
	return (Math.cos(Math.PI * (t + 1)) + 1) / 2
}
