import * as View from "./view"
import demos from "./demos"

let state = {
	time: 0,
	demos: demos
}

let view = View.create()
document.body.appendChild(view.element)
loop()

function loop() {
	View.render(view, state)
	state.time++
	requestAnimationFrame(loop)
}
