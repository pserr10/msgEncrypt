export class Plus3Cipher {

    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str, key) {
        let setKey = Number(key) ? key : 3;
        let result = [];

        str.split("").forEach(char => {
            result.push(this.alphabet[this.alphabet.indexOf(char) + setKey]);
        });

        return result.join("");
    }

    decrypt(str, key) {
        let setKey = Number(key) ? key : 3;
        let result = [];

        str.split("").forEach(char => {
            result.push(this.alphabet[this.alphabet.indexOf(char) - setKey]);
        });

        return result.join("");
    }
}