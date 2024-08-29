const buttons = document.getElementsByTagName('button');


for (let i = 0; i < buttons.length; i += 1) {
	let button = buttons[i];
	let buttonName = button.innerHTML;
	button.addEventListener('click', function () {
		console.log(buttonName);
	});
}
