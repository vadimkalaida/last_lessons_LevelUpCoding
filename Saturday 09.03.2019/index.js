var textInput = document.querySelector('#input-text'),
	textOutput = document.querySelector('#output-text');

textInput.addEventListener('input', function() {
	if(textInput.value.length < 6 || textInput.value.length > 16) {
		textOutput.innerHTML = "Min 6 symbols and max 16 symbols";
	} else {
		textOutput.innerHTML = "Good!";
	}
});
