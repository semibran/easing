import * as View from "./view"
import * as quadratic from "../lib/quadratic"
import * as sinusoidal from "../lib/sinusoidal"

let state = {
	time: 0,
	demos: [
		{
			title: "linear",
			formula: "t",
			fn: t => t
		},
		{
			title: "quadratic ease in",
			formula: "t * t",
			fn: quadratic.easeIn
		},
		{
			title: "quadratic ease out",
			formula: "-t * (t - 2)",
			fn: quadratic.easeOut
		},
		{
			title: "quadratic ease in/out",
			formula: "t < 0.5 ? t * t * 2 : -((t * 2 - 1) * (t * 2 - 3) - 1) / 2",
			fn: quadratic.easeInOut
		},
		{
			title: "sinusoidal ease in",
			formula: "cos(π + π / 2 * t) + 1",
			fn: sinusoidal.easeIn
		},
		{
			title: "sinusoidal ease out",
			formula: "sin(π / 2 * t)",
			fn: sinusoidal.easeOut
		},
		{
			title: "sinusoidal ease in/out",
			formula: "(cos(π + π * t) + 1) / 2",
			fn: sinusoidal.easeInOut
		}
	]
}

let view = View.create()
document.body.appendChild(view.element)
loop()

function loop() {
	View.render(view, state)
	state.time++
	requestAnimationFrame(loop)
}
