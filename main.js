//TODO
// fix aria issues
// redo image inside the input field

const currencyFieldElement = document.querySelector('#currency-field');
const numberOfPeopleInputElement = document.querySelector(
	'#number-of-people-input'
);
const tipButtons = document.querySelectorAll('.select-tip button');
const customTipInputElement = document.querySelector('#button-input');
const resetButtonElement = document.querySelector('#reset-button');
const errorMessageElement = document.querySelector('.error-message');

let currencyAmount = undefined;
let numberOfPeople = undefined;
let customTip = undefined;
let fixedTip = undefined;
let selectedFixedTip = undefined;
let previousSelection = undefined;
let errorMessage = false;

function handleTipButtonClick(e) {
	e.preventDefault();
	customTipInputElement.value = '';
	previousSelection = selectedFixedTip;
	selectedFixedTip = e.target;

	if (previousSelection !== selectedFixedTip) {
		selectedFixedTip?.classList.add('selected');
		previousSelection?.classList.remove('selected');
	} else {
		previousSelection?.classList.add('selected');
	}

	fixedTip = e.target.value;

	validateInput();
}

function handleInputValidation(e) {
	const numberRegex = /^\d*(\.\d{0,2})?$/;
	const potentialValue = e.target.value + e.key;

	if (!numberRegex.test(potentialValue)) {
		console.log('yay');
		e.preventDefault();
	}
}

function resetTotals(e) {
	if (e.target.value.length === 0) {
		document.querySelector('.tip-amount').textContent = '$0.00';
		document.querySelector('.tip-total').textContent = '$0.00';
	}
}

function handleInput(e) {
	switch (e.target.id) {
		case 'currency-field':
			currencyAmount = e.target.value;
			resetTotals(e);
			break;
		case 'button-input':
			customTip = e.target.value;
			resetTotals(e);
			break;
		case 'number-of-people-input':
			numberOfPeople = e.target.value;
			resetTotals(e);
			break;
		default:
			break;
	}

	validateInput();
}

tipButtons.forEach((button) =>
	button.addEventListener('click', handleTipButtonClick)
);

function validateInput() {
	let localCurrencyAmount = parseFloat(currencyAmount);
	let localNumberOfPeople = parseInt(numberOfPeople);
	let localFixedTip = parseFloat(fixedTip);
	let localCustomTip = parseFloat(customTip);

	errorMessage = localNumberOfPeople === 0;
	errorMessageElement.classList[errorMessage ? 'remove' : 'add']('hidden');
	numberOfPeopleInputElement.classList[errorMessage ? 'add' : 'remove'](
		'error'
	);

	if (errorMessage) {
		document.querySelector('.tip-amount').textContent = '$0.00';
		document.querySelector('.tip-total').textContent = '$0.00';
	}

	if (
		currencyAmount &&
		numberOfPeople &&
		(customTip || fixedTip) &&
		!errorMessage
	) {
		let tipAmount =
			(localCurrencyAmount * (localFixedTip || localCustomTip)) / 100;
		console.log(tipAmount);

		let tipTotal = localCurrencyAmount + tipAmount;
		document.querySelector('.tip-amount').textContent = (
			tipAmount / localNumberOfPeople
		).toFixed(2);
		document.querySelector('.tip-total').textContent = (
			tipTotal / localNumberOfPeople
		).toFixed(2);

		resetButtonElement.disabled = false;
	} else {
		resetButtonElement.disabled = true;
	}
}

function handleClickCustomTip(e) {
	customTip = '';
	selectedFixedTip?.classList.remove('selected');
	resetTotals(e);
	fixedTip = '';

	validateInput();
}

function calculateTip() {
	console.log(calculateTip);
}

currencyFieldElement.addEventListener('input', handleInput);
numberOfPeopleInputElement.addEventListener('input', handleInput);
customTipInputElement.addEventListener('input', handleInput);
currencyFieldElement.addEventListener('keypress', handleInputValidation);
numberOfPeopleInputElement.addEventListener('keypress', handleInputValidation);
customTipInputElement.addEventListener('keypress', handleInputValidation);

customTipInputElement.addEventListener('click', handleClickCustomTip);

