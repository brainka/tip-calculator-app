//TODO
// fix aria issues
// redo image inside the input field

const currencyFieldElement = document.querySelector('#currency-field');
const numberOfPeopleInputElement = document.querySelector(
	'#number-of-people-input'
);
const tipButtons = document.querySelectorAll('.select-tip button');
const tipInputElement = document.querySelector('#button-input');
const resetButtonElement = document.querySelector('#reset-button')

let currencyAmount = undefined;
let numberOfPeople = undefined;
let customTip = undefined;

function handleTipButtonClick(e) {
	e.preventDefault();
	console.log('button clicked');
	console.log(e.target.value);
}

function handleCurrencyInputChange(e) {
	console.log(`currency ${e.target.value}`);
	currencyAmount = e.target.value;
}

function handleNumberOfPeopleChange(e) {
	console.log(`number of people ${e.target.value}`);
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

function handleInput(e) {
	// console.log(e.target.id);
	// console.log(e.target.value);

	switch (e.target.id) {
		case 'currency-field':
			console.log(`currency field selected - ${e.target.value}`);
			currencyAmount = e.target.value;
			break;
		case 'button-input':
			console.log(`button input ${e.target.value}`);
			customTip = e.target.value;
			break;
		case 'number-of-people-input':
			console.log(`number-of-people-input ${e.target.value}`);
			numberOfPeople = e.target.value;
			break;
		default:
			break;
	}

	validateInput();
}
// ====
tipButtons.forEach((button) =>
	button.addEventListener('click', handleTipButtonClick)
);

function validateInput() {




	if (currencyAmount && numberOfPeople && customTip) {
		console.log('all has been filled out');
		resetButtonElement.removeAttribute('disabled')
	} else {
		resetButtonElement.setAttribute('disabled', '');
	}
}

currencyFieldElement.addEventListener('input', handleInput);

numberOfPeopleInputElement.addEventListener('input', handleInput);

tipInputElement.addEventListener('input', handleInput);

//enable reset button when all input fields have been filled in
// do actual validation later
