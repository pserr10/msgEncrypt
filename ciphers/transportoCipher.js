export class TransportoCipher {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let keyIndex = this.alphabet.indexOf(key.toLowerCase());
        let transportoAlphabet = (this.alphabet.slice(keyIndex).concat(this.alphabet.slice(0, keyIndex)));
        let result = [];
        for (let letter of normalizedStr) {
            let charTest = this.alphabet.indexOf(letter.toLowerCase());
            if (charTest == "-1") {
                let testChar = " ";
                result.push(testChar);
            } else {
                let testChar = transportoAlphabet[charTest];
                result.push(testChar);
            }
        }
        return result.join("");
    }

    decrypt(str, key) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let keyIndex = this.alphabet.indexOf(key.toLowerCase());
        let transportoAlphabet = (this.alphabet.slice(keyIndex).concat(this.alphabet.slice(0, keyIndex)));
        let result = [];
        for (let letter of normalizedStr) {
            let charTest = transportoAlphabet.indexOf(letter.toLowerCase());
            console.log("informação acerca do index: ", charTest);
            if (charTest == "-1") {
                let testChar = " ";
                result.push(testChar);
            } else {
                let testChar = this.alphabet[charTest];
                result.push(testChar);
            }
        }
        return result.join("");
    }
}