import * as easing from "../lib/easing"

export default [
	{
		fn: t => t,
		title: "linear",
		formula: "t"
	},
	{
		title: "asymptotic ease in",
		formula: "x += (1 - x) / e",
		fn: t => {
			let x = 0
			for (let i = 0; i < t; i += 1 / 32) {
				x += (1 - x) / 4
			}
			return x
		}
	},
	{
		title: "asymptotic ease in/out",
		formula: "v += ((1 - x) / e1 - v) / e2\nx += v",
		fn: t => {
			let x = 0
			let v = 0
			for (let i = 0; i < t; i += 1 / 32) {
				v += ((1 - x) / 12 - v) / 4
				x += v
			}
			return x
		}
	},
	{
		fn: easing.quadratic.easeIn,
		title: "quadratic ease in",
		formula: "t * t"
	},
	{
		fn: easing.quadratic.easeOut,
		title: "quadratic ease out",
		formula: "-t * (t - 2)"
	},
	{
		fn: easing.quadratic.easeInOut,
		title: "quadratic ease in/out",
		formula: `t < 0.5
  ? easeIn(t * 2) / 2
  : (easeOut(t * 2 - 1) + 1) / 2`
	},
	{
		fn: easing.cubic.easeIn,
		title: "cubic ease in",
		formula: "t * t * t"
	},
	{
		fn: easing.cubic.easeOut,
		title: "cubic ease out",
		formula: "pow(t - 1, 3) + 1"
	},
	{
		fn: easing.cubic.easeInOut,
		title: "cubic ease in/out",
		formula: `t < 0.5
  ? easeIn(t * 2) / 2
  : (easeOut(t * 2 - 1) + 1) / 2`
	},
	{
		fn: easing.sinusoidal.easeIn,
		title: "sinusoidal ease in",
		formula: "cos(π + π / 2 * t) + 1"
	},
	{
		fn: easing.sinusoidal.easeOut,
		title: "sinusoidal ease out",
		formula: "sin(π / 2 * t)"
	},
	{
		fn: easing.sinusoidal.easeInOut,
		title: "sinusoidal ease in/out",
		formula: "(cos(π + π * t) + 1) / 2"
	},
	{
		fn: easing.exponential.easeIn,
		title: "exponential ease in",
		formula: "pow(2, 10 * (t - 1))"
	},
	{
		fn: easing.exponential.easeOut,
		title: "exponential ease out",
		formula: "-pow(2, -10 * t) + 1"
	},
	{
		fn: easing.exponential.easeInOut,
		title: "exponential ease in/out",
		formula: `t < 0.5
  ? easeIn(t * 2) / 2
  : (easeOut(t * 2 - 1) + 1) / 2`
	},
	{
		fn: easing.circular.easeIn,
		title: "circular ease in",
		formula: "-sqrt(1 - pow(t, 2))"
	},
	{
		fn: easing.circular.easeOut,
		title: "circular ease out",
		formula: "sqrt(1 - pow(t - 1, 2))"
	},
	{
		fn: easing.circular.easeInOut,
		title: "circular ease in/out",
		formula: `t < 0.5
  ? easeIn(t * 2) / 2
  : (easeOut(t * 2 - 1) + 1) / 2`
	}
]
