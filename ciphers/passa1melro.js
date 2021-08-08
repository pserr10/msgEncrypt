export class Passa1Melro {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    encrypt(str) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let result = str.split("").map(char => {
            let random = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
            return char + random;
        });
        return result.join("");
    }

    decrypt(msg) {
        let result = [];
        for (let i = 0; i < msg.split("").length; i++) {
            result.push(msg.split("")[i]);
            i = i + 1;
        }
        return result.join("");
    }
}