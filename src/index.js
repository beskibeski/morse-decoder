const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const CODE_TABLE = {
    '00': '',
    '10': '.',
    '11': '-',
}

const decodeMorseLetter = (morseLetter) => {
    for(let key in MORSE_TABLE) {
        if (key === morseLetter) {
            return MORSE_TABLE[key];
        }
    }
};

const decode = expr =>
    expr.split('**********').map((word) =>
        word.match(/.{10,10}/g).map((letter) =>
            decodeMorseLetter(letter.match(/.{2,2}/g)
                .map((el) => el === '00' ? CODE_TABLE['00'] : el === '10' ? CODE_TABLE['10'] : CODE_TABLE['11'])
                    .join('')))
        .join(''))
    .join(' ');

module.exports = {
    decode
}