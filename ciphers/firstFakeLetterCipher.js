export class FirstFakeLetterCipher {

    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let result = [];
        let char = [];
        for (let i = 0; i < normalizedStr.length; i++) {
            let charTest = normalizedStr[i];
            char.push(charTest);
            if ((charTest.match(" ")) || (i + 1 == normalizedStr.length)) {
                char.unshift(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
                result = result.concat(char);
                char = [];
            }
        }
        return result.join("");
    }

    decrypt(str) {
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let result = [];
        let char = [];
        for (let i = 0; i < normalizedStr.length; i++) {
            let charTest = normalizedStr[i];
            char.push(charTest);
            if ((charTest.match(" ")) || (i + 1 == normalizedStr.length)) {
                char.shift();
                result = result.concat(char);
                char = [];
            }
        }
        return result.join("");
    }
}