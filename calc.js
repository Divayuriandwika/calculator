function getInput() {
	return document.getElementById('maindisplay').innerText;
}

function printInput(num) {
	document.getElementById('maindisplay').innerText = num;
}

function getOutput() {
	return document.getElementById('subdisplay').innerText;
}

function printOutput(num) {
	if (num == '') {
		document.getElementById('subdisplay').innerText = num;
	} else {
		document.getElementById('subdisplay').innerText = numberFormat(num);
	}
}

function numberFormat(num) {
	if (num == '-') {
		return '';
	}
	let n = Number(num);
	let value = n.toLocaleString('en');
	return value;
}

function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName('opkey');
for (let i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		if (this.id == 'clear') {
			printInput('');
			printOutput('');
		} else if (this.id == 'backspace') {
			let output = reverseNumberFormat(getOutput()).toString();
			if (output) {
				//if output has a value
				output = output.substr(0, output.length - 1);
				printOutput(output);
			}
		} else {
			let output = getOutput();
			let history = getInput();
			if (output == '' && history != '') {
				if (isNaN(history[history.length - 1])) {
					history = history.substr(0, history.length - 1);
				}
			}
			if (output != '' || history != '') {
				output = output == '' ? output : reverseNumberFormat(output);
				history = history + output;
				if (this.id == '=') {
					let result = eval(history);
					printOutput(result);
					printInput('');
				} else {
					history = history + this.id;
					printInput(history);
					printOutput('');
				}
			}
		}
	});
}

let number = document.getElementsByClassName('key');
for (let i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function () {
		let output = reverseNumberFormat(getOutput());
		if (output != NaN) {
			//if output is a number
			output = output + this.id;
			printOutput(output);
		}
	});
}
