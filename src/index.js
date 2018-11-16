import * as View from "./view"
import * as quadratic from "../lib/quadratic"
import * as cubic from "../lib/cubic"
import * as sinusoidal from "../lib/sinusoidal"
import * as exponential from "../lib/exponential"

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
			formula: "t < 0.5 ? t * t * 2 : -((t = t * 2 - 1) * (t - 2) - 1) / 2",
			fn: quadratic.easeInOut
		},
		{
			title: "cubic ease in",
			formula: "t * t * t",
			fn: cubic.easeIn
		},
		{
			title: "cubic ease out",
			formula: "--t * t * t + 1",
			fn: cubic.easeOut
		},
		{
			title: "cubic ease in/out",
			formula: "t < 0.5 ? t * t * t * 4 : ((t = t * 2 - 2) * t * t + 2) / 2",
			fn: cubic.easeInOut
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
		},
		{
			title: "exponential ease in",
			formula: "2 ^ (10 * (t - 1))",
			fn: exponential.easeIn
		},
		{
			title: "exponential ease out",
			formula: "-(2 ^ (-10 * t)) + 1",
			fn: exponential.easeOut
		},
		{
			title: "exponential ease in/out",
			formula: "(t = t * 2 - 1) < 0 ? 2 ^ (10 * t) / 2 : (-(2 ^ (-10 * t) + 2) / 2",
			fn: exponential.easeInOut
		},
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
