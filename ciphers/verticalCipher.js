export class VerticalCipher {

    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let middleArray = [];
        let inferiorArray = [];
        let tempArray = [];
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
            } else {
                tempArray.push(letter);
                if (tempArray.length == key) {
                    superiorArray.push(tempArray[2]);
                    middleArray.push(tempArray[1]);
                    inferiorArray.push(tempArray[0]);
                    tempArray = [];
                }
            }
        }
        return result.join("");
    }

    decrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let superiorArray = [];
        let middleArray = [];
        let inferiorArray = [];
        let result = [];
        let tempArray = [];
        let i = 0;
        normalizedStr = normalizedStr.concat(" ");
        for (let letter of normalizedStr) {
            let indexLetter = this.alphabet.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") {
                superiorArray.forEach(element => {
                    result.push(inferiorArray[i]);
                    result.push(middleArray[i]);
                    result.push(element);
                    i++;
                });
                i = 0;
                result.push(" ");
                superiorArray = [];
                middleArray = [];
                inferiorArray = [];
            } else {
                tempArray.push(letter);
                if (tempArray.length == key) {
                    if (superiorArray.length === 0) {
                        superiorArray.push(...tempArray)
                    } else if (middleArray.length === 0) {
                        middleArray.push(...tempArray)
                    } else if (inferiorArray.length === 0) {
                        inferiorArray.push(...tempArray)
                    }
                    tempArray = [];
                }
            }
        }
        return result.join("");
    }
}