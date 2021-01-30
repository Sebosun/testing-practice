function reverseString(sentence){
	let sentenceRow = sentence.split('');
	let rowReversed = sentenceRow.reverse().join('');
	return rowReversed
}


module.exports = reverseString;