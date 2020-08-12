class Component {
	constructor (tag,prop,attrs,text) { 
		this.tag = tag;
		this.prop = prop;
		this.text = text;
		this.attrs = attrs;
	}

	context() {
		let el = document.createElement(this.tag);
		el.textContent = this.text;
		for (let prop of this.prop) {
			el.classList.add(prop)
		}
		for (let name in this.attrs) {
			el.setAttribute(name,this.attrs[name])
		}
		return el;
	}
	/*
	 * tag: the basic html tag
	 * prop: a list of css classes or an Property object (todo)
	 * text: the text to display on the element
	 */
}

class Layer {
	constructor (upon) {
		this.layer = upon;
		this.components = [];
	}

	place(component) {
		this.components.push(component)
	}

	show() {
		if (this.components == []) {
			console.error('Error: Specify Components');
			return;
		}
		for (let c of this.components) {
			this.layer.appendChild(c.context())
		}
	}
	/*
	 * upon: refers to the element on which Components are laid out
	 *       Example: "new Layout(document.body)" or "new Layout(document.getElementById('YOUR_ELEMENTS_ID'))"
	 */
}

class UI {
	constructor (layer) {
		this.layer = new Layer(layer);
	}

	place(component) {
		this.layer.place(component);
	}

	show() {
		this.layer.show()
	}
}