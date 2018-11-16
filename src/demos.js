import * as quadratic from "../lib/quadratic"
import * as cubic from "../lib/cubic"
import * as sinusoidal from "../lib/sinusoidal"
import * as exponential from "../lib/exponential"
import * as circular from "../lib/circular"

export default [
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
		formula: "t < 0.5 ? t^3 * 4 : ((t * 2 - 2)^3 + 2) / 2",
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
	{
		fn: circular.easeIn,
		title: "circular ease in",
		formula: "-sqrt(1 - t^2)"
	},
	{
		fn: circular.easeOut,
		title: "circular ease out",
		formula: "sqrt(1 - (t - 1)^2)"
	},
	{
		fn: circular.easeInOut,
		title: "circular ease in/out",
		formula: `t < 0.5
  ? -(sqrt(1 - (t * 2)^2) - 1)/ 2
  : (sqrt(1 - (t * 2 - 2)^2) + 1) / 2`
	}
]
