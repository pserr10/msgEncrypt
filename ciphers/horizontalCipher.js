export class HorizontalCipher {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let middleArray = [];
        let inferiorArray = [];
        let result = [];
        normalizedStr = normalizedStr.concat(" ");
        for (let letter of normalizedStr) {
            let indexLetter = this.alphabet.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") {
                inferiorArray.push(" ");
                superiorArray.push(...middleArray);
                superiorArray.push(...inferiorArray);
                result.push(...superiorArray);
                superiorArray = [];
                middleArray = [];
                inferiorArray = [];
            } else if (superiorArray.length < key) {
                superiorArray.unshift(letter);
            } else if (middleArray.length < key) {
                middleArray.unshift(letter);
            } else if (inferiorArray.length < key) {
                inferiorArray.unshift(letter);
            }
        }
        return result.join("");
    }

    decrypt(str, key) {
        return this.encrypt(str, key);
    }
}