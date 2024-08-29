const buttons = document.getElementsByTagName('button');


for (let i = 0; i < buttons.length; i += 1) {
	let button = buttons[i];
	let buttonName = button.innerHTML;
	button.addEventListener('click', function () {
		console.log(buttonName);
	});
}

// but if you use var (I don't understand why you use it, but...)

function createHandler(name) {
	return function () {
		console.log(name);
	}
}

for (let i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName));
}