
// divide by lenght of alphabet with a reminder
// so 26 % 25 reminder 1 the letter a lasts



function caesar(message, shift){

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetUpper = alphabet.toUpperCase();

    let messageArray = message.split('')
    let newMessage = messageArray.map(sign => {
        // -1 is what we get when it doesnt find a referent
        if ( alphabet.indexOf(sign) != -1 ){
            let alphaSign = alphabet.indexOf(sign) 
            return alphabet[ (alphaSign + shift) % alphabet.length]
        } else if( alphabetUpper.indexOf(sign) != -1){
            let alphaSign = alphabetUpper.indexOf(sign)
            return alphabetUpper[(alphaSign + shift) % alphabet.length]
        }
        else{
            return sign
        }
    });
    

    return newMessage.join('');
}

module.exports = caesar;