// Variables
var field = document.querySelector('#today');
var date = new Date();

// If [type="date"] is supported, update the DOM
if (isDateSupported()) {

	// Remove attributes
	field.removeAttribute('pattern');
	field.removeAttribute('placeholder');

	// Remove the helper text
	var helperText = document.querySelector('[for="today"] .description');
	if (helperText) {
		helperText.parentNode.removeChild(helperText);
	}

}

// Set the value
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);