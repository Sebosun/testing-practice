function reverseString(sentence){
	let sentenceRow = sentence.split('');
	let rowReversed = sentenceRow.reverse().join('');
	console.log(rowReversed);
	return rowReversed
}


module.exports = reverseString;