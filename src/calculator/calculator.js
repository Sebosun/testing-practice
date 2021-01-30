function calculator(mode, first, second){
	if (mode == 'add'){ 
		return first + second
	} else if (mode == 'subject') { 
		return first - second
	} else if (mode == 'multiply') {
		return first * second
	} else if (mode == 'divide') {
		return first / second
	}

}

module.exports = calculator;