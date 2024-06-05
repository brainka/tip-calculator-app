//TODO
// fix aria issues
// redo image inside the input field

// const inputElements = document.querySelectorAll('input');
const currencyFieldElement = document.querySelector('#currency-field');
const numberOfPeopleInputElement = document.querySelector(
	'#number-of-people-input'
);

let currencyAmount = undefined;
let numberOfPeople = undefined;

// inputElements.forEach((element) =>
// 	element.addEventListener('keypress', handleInputChange)
// );

console.log(currencyAmount);

function handleCurrencyInputChange(e) {
	console.log(e.target.value);
	currencyAmount = e.target.value;

	render();


    
}

function handleNumberOfPeopleChange(e) {
	console.log(e.target.value);
}

function handleInputValidation() {
	console.log('input validation');

	const numberRegex = /^[0-9]/;
	// const numberRegex = /^\$?\d+(,\d{3})*(\.\d{2})?$/;

	if (!numberRegex.test(e.key)) {
		console.log('yay');
		e.preventDefault();
	}
}

currencyFieldElement.addEventListener('input', handleCurrencyInputChange);
numberOfPeopleInputElement.addEventListener(
	'input',
	handleNumberOfPeopleChange
);

function render() {
	console.log(`in render function ${currencyAmount}`);

    console.log(typeof currencyAmount);
}
