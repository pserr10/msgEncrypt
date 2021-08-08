export class HalvesCipher {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let inferiorArray = [];
        let result = [];
        let i = 0;
        for (let letter of normalizedStr) {
            let indexLetter = this.alphabet.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") {
                i++;
            }
            else if (i === 0) {
                superiorArray.push(letter);
            } else if (i % 2 === 0) {
                superiorArray.push(letter);
            } else {
                inferiorArray.push(letter);
            }
            i++;
        }
        superiorArray.push(" ");
        result = superiorArray.concat(inferiorArray);
        return result.join("");
    }

    decrypt(str) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let inferiorArray = [];
        let result = [];
        let trueLenght = 0;
        for (let letter of normalizedStr) {
            let indexLetter = this.alphabet.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") {
                superiorArray = superiorArray.concat(inferiorArray);
                inferiorArray = [];
            }
            else {
                inferiorArray.push(letter);
            }
        }
        if (superiorArray.length < inferiorArray.length) {
            trueLenght = inferiorArray.length;
        } else {
            trueLenght = superiorArray.length;
        }
        for (let i = 0; i < trueLenght; i++) {
            result.push(superiorArray[i]);
            result.push(inferiorArray[i]);
        }
        return result.join("");
    }
}