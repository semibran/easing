export default function div(className, children) {
	let div = document.createElement("div")
	div.className = className
	if (!children) return div
	for (let child of children) {
		if (typeof child === "string") {
			child = document.createTextNode(child)
		}
		div.appendChild(child)
	}
	return div
}
