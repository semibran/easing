import div from "../lib/div"

export function create(view) {
	return {
		element: div("wrap"),
		cache: {}
	}
}

export function render(view, state) {
	let cache = view.cache

	if (!cache.demos) {
		cache.demos = []
		for (let demo of state.demos) {
			let circle = div("circle")
			let element =
				div("demo", [
					div("header", [
						demo.fn ? drawFn(32, demo.fn) : null,
						div("text", [
							div("title", [ demo.title ]),
							div("formula", [ demo.formula ])
						])
					]),
					div("slider", [
						div("track"),
						circle
					])
				])
			view.element.appendChild(element)
			cache.demos.push({ element, circle })
		}
	}

	for (let i = 0; i < state.demos.length; i++) {
		let demo = state.demos[i]
		let p = state.time % 360
		let t = 1
		if (p < 120) {
			t = p / 120
		} else if (p >= 180 && p < 300) {
			t = (p - 180) / 120
		}

		let x = 0
		if (demo.title === "asymptotic ease in") {
			if (p % 180 === 0) demo.x = 0
			demo.x += (1 - demo.x) / 24
			x = demo.x
		} else if (demo.title === "asymptotic ease in/out") {
			if (p % 180 === 0) {
				demo.x = 0
				demo.v = 0
			}
			demo.v += ((1 - demo.x) / 32 - demo.v) / 8
			demo.x += demo.v
			x = demo.x
		} else {
			x = demo.fn(t)
		}

		if (p >= 180) {
			x = 1 - x
		}

		let circle = cache.demos[i].circle
		circle.style.left = x * 100 + "%"
	}
}

function drawFn(size, fn) {
	let w = size - 2
	let h = size - 2
	let canvas = document.createElement("canvas")
	let context = canvas.getContext("2d")
	canvas.width = size
	canvas.height = size
	context.strokeStyle = "white"
	context.globalAlpha = 0.25

	context.beginPath()
	context.moveTo(size / 3, 0)
	context.lineTo(size / 3, size)
	context.stroke()

	context.beginPath()
	context.moveTo(size * 2 / 3, 0)
	context.lineTo(size * 2 / 3, size)
	context.stroke()

	context.beginPath()
	context.moveTo(0, size / 3)
	context.lineTo(size, size / 3)
	context.stroke()

	context.beginPath()
	context.moveTo(0, size * 2 / 3)
	context.lineTo(size, size * 2/ 3)
	context.stroke()

	context.globalAlpha = 1

	for (let i = 0; i < size; i++) {
		let p1 = i / size
		let p2 = (i + 1) / size
		context.beginPath()
		context.moveTo(w * p1 + 1, (1 - fn(p1)) * h + 1)
		context.lineTo(w * p2 + 1, (1 - fn(p2)) * h + 1)
		context.stroke()
	}

	return canvas
}
