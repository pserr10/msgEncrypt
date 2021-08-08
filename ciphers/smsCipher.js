export class SmsCipher {

    constructor() {
        this.numbers = ["2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66", "666", "7", "77", "777", "8", "88", "888", "9", "99", "999", "9999"];
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str, key) {
        const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const chars = normalizedStr.split("");
        const result = [];
        chars.forEach(char => {
            result.push(this.numbers[this.alphabet.indexOf(char.toLowerCase())] + " ");
        });
        return result.join("");
    }

    decrypt(str, key) {
        const chars = str.split(" ");
        const result = [];
        chars.forEach(char => {
            result.push(this.alphabet[this.numbers.indexOf(char)]);
        });
        return result.join("");
    }

}