export class HorizontalKeyPhraseCipher {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.alphabetUpperLine = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
        this.alphabetLowerLine = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let inferiorArray = [];
        let alphabetForUse = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let result = [];
        for (let letter of normalizedKey) {
            let indexLetter = alphabetForUse.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") { } else if (superiorArray.length == "13") {
                inferiorArray.push(letter);
                alphabetForUse.splice(indexLetter, 1);
            } else {
                superiorArray.push(letter);
                alphabetForUse.splice(indexLetter, 1);
            }
        }
        alphabetForUse.forEach(element => {
            if (superiorArray.length < "13") {
                superiorArray.push(element)
            } else {
                inferiorArray.push(element)
            }
        })

        for (let letter of normalizedStr) {
            let indexLetter = this.alphabetUpperLine.indexOf(letter.toLowerCase());
            let spaceChar = this.alphabet.indexOf(letter.toLowerCase());
            if (spaceChar == "-1") {
                let newChar = " ";
                result.push(newChar);
            } else if (indexLetter == "-1") {
                indexLetter = this.alphabetLowerLine.indexOf(letter.toLowerCase());
                let newChar = inferiorArray[indexLetter];
                result.push(newChar);
            } else {
                let newChar = superiorArray[indexLetter];
                result.push(newChar);
            }
        }

        return result.join("");
    }

    decrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let inferiorArray = [];
        let alphabetForUse = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let result = [];
        for (let letter of normalizedKey) {
            let indexLetter = alphabetForUse.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") { } else if (superiorArray.length == "13") {
                inferiorArray.push(letter);
                alphabetForUse.splice(indexLetter, 1);
            } else {
                superiorArray.push(letter);
                alphabetForUse.splice(indexLetter, 1);
            }
        }
        alphabetForUse.forEach(element => {
            if (superiorArray.length < "13") {
                superiorArray.push(element)
            } else {
                inferiorArray.push(element)
            }
        })

        for (let letter of normalizedStr) {
            let indexLetter = superiorArray.indexOf(letter.toLowerCase());
            let spaceChar = this.alphabet.indexOf(letter.toLowerCase());
            if (spaceChar == "-1") {
                let newChar = " ";
                result.push(newChar);
            } else if (indexLetter == "-1") {
                indexLetter = inferiorArray.indexOf(letter.toLowerCase());
                let newChar = this.alphabetLowerLine[indexLetter];
                result.push(newChar);
            } else {
                let newChar = this.alphabetUpperLine[indexLetter];
                result.push(newChar);
            }
        }

        return result.join("");
    }
}