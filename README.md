# EasyUI

### EasyUI is an easy-to-use HTML generator.

## How to add to a existing or new project
```bash
$ cd YOUR_WORKING_DIR
$ git clone https://github.com/rishit-khandelwal/EasyUI
```

Then open your ```HTML``` file in an editor of your choice, and add EasyUI.

```html
<html>
	<head>
	...
	<script type="text/javascript" src="EasyUI/lib/easy.js"></script>
	</head>
	<body>
	...
	</body>
</html>
```

### Then add EasyUI Layer object and Components
```html
<html>
	<head>
	...
	<script type="text/javascript" src="EasyUI/lib/easy.js"></script>
	<script>
		const layer = new Layer(document.body); // Replace with document.getElementById('id') if you want everything in one element
		let c = new Component('h1',['CSS_CLASSES'],{ATTR},'Hello, World') // new Component(TAGNAME,[CSS_CLASSES],{ATTRIBUTES},Content)
		layer.place(c)
	</script>
	</head>
	<body>
	...
	</body>
</html>
```

### Displaying the content
```html
<html>
	<head>
	...
	<script type="text/javascript" src="EasyUI/lib/easy.js"></script>
	<script>
		const layer = new Layer(document.body); // Replace with document.getElementById('id') if you want everything in one element
		let c = new Component('h1',['CSS_CLASSES'],'Hello, World') // new Component(TAGNAME,[CSS_CLASSES],Content)
		body.place(c)
	</script>
	</head>
	<body>
	...
	<script>
		layer.show()
	</script>
	</body>
</html>
```