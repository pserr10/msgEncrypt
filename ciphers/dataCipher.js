export class DataCipher {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
    encrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let firstArray = [key[0], "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        let secondArray = [key[1], "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
        let thirdArray = [key[2], "u", "v", "w", "x", "y", "z", "0", "1", "2", "3"];
        let forthArray = [key[3], "4", "5", "6", "7", "8", "9"];
        let result = [];
        for (let letter of normalizedStr) {
            let indexLetter = this.alphabet.indexOf(letter.toLowerCase());
            if (indexLetter == "-1") {
                let spaceChar = " ";
                result.push(spaceChar);
            } else {
                /** primeiro array */
                if (firstArray.includes(letter.toLowerCase(), 1)) {
                    if (firstArray.indexOf(letter.toLowerCase()) == "10") {
                        result.push(firstArray[0] + "0");
                    }
                    else {
                        result.push(firstArray[0] + firstArray.indexOf(letter.toLowerCase()));
                    }
                }
                /** second array */
                if (secondArray.includes(letter.toLowerCase(), 1)) {
                    if (secondArray.indexOf(letter.toLowerCase()) == "10") {
                        result.push(secondArray[0] + "0");
                    }
                    else {
                        result.push(secondArray[0] + secondArray.indexOf(letter.toLowerCase()));
                    }
                }
                /** third array */
                if (thirdArray.includes(letter.toLowerCase(), 1)) {
                    if (thirdArray.indexOf(letter.toLowerCase()) == "10") {
                        result.push(thirdArray[0] + "0");
                    }
                    else {
                        result.push(thirdArray[0] + thirdArray.indexOf(letter.toLowerCase()));
                    }
                }
                /** primeiro array */
                if (forthArray.includes(letter.toLowerCase(), 1)) {
                    if (forthArray.indexOf(letter.toLowerCase()) == "10") {
                        result.push(forthArray[0] + "0");
                    }
                    else {
                        result.push(forthArray[0] + forthArray.indexOf(letter.toLowerCase()));
                    }
                }
            }
        }
        return result.join("");
    }
    decrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let firstArray = [key[0], "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        let secondArray = [key[1], "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
        let thirdArray = [key[2], "u", "v", "w", "x", "y", "z", "0", "1", "2", "3"];
        let forthArray = [key[3], "4", "5", "6", "7", "8", "9"];
        let result = [];
        let tempPos = [];
        str = str.split("");
        str.forEach(element => {
            if (element == " ") {
                result.push(element)
            } else {
                tempPos.push(element);
                if (tempPos.length == "2") {
                    if (tempPos[0] === firstArray[0]) {
                        if (tempPos[1] == "0") {
                            result.push(firstArray[10])
                        } else {
                            result.push(firstArray[tempPos[1]])
                        }
                    }
                    if (tempPos[0] === secondArray[0]) {
                        if (tempPos[1] == "0") {
                            result.push(secondArray[10])
                        } else {
                            result.push(secondArray[tempPos[1]])
                        }
                    }
                    if (tempPos[0] === thirdArray[0]) {
                        if (tempPos[1] == "0") {
                            result.push(thirdArray[10])
                        } else {
                            result.push(thirdArray[tempPos[1]])
                        }
                    }
                    if (tempPos[0] === forthArray[0]) {
                        if (tempPos[1] == "0") {
                            result.push(forthArray[10])
                        } else {
                            result.push(forthArray[tempPos[1]])
                        }
                    }
                    tempPos = [];
                }
            }
        });
        return result.join("");
    }
}