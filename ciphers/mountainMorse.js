export class MountainMorse {
    constructor() {
        this.alphabetEncode = {
            "a": "▴▲", "b": "▲▴▴▴", "c": "▲▴▲▴",
            "d": "▲▴▴", "e": "▴", "f": "▴▴▲▴",
            "g": "▲▲▴", "h": "▴▴▴▴", "i": "▴▴",
            "j": "▴▲▲▲", "k": "▲▴▲", "l": "▴▲▴▴",
            "m": "▲▲", "n": "▲▴", "o": "▲▲▲",
            "p": "▴▲▲▴", "q": "▲▲▴▲", "r": "▴▲▴",
            "s": "▴▴▴", "t": "▲", "u": "▴▴▲",
            "v": "▴▴▴▲", "w": "▴▲▲", "y": "▲▴▲▲",
            "z": "▲▲▴▴"
        }
        this.alphabetDecode = {
            "▴▲": "a", "▲▴▴▴": "b", "▲▴▲▴": "c",
            "▲▴▴": "d", "▴": "e", "▴▴▲▴": "f",
            "▲▲▴": "g", "▴▴▴▴": "h", "▴▴": "i",
            "▴▲▲▲": "j", "▲▴▲": "k", "▴▲▴▴": "l",
            "▲▲": "m", "▲▴": "n", "▲▲▲": "o",
            "▴▲▲▴": "p", "▲▲▴▲": "q", "▴▲▴": "r",
            "▴▴▴": "s", "▲": "t", "▴▴▲": "u",
            "▴▴▴▲": "v", "▴▲▲": "w", "▲▴▲▲": "y",
            "▲▲▴▴": "z"
        }
    }

    encrypt(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split('').map(char => char.split('').map(morse => this.alphabetEncode[morse]).join('')).join(' ');
    }

    decrypt(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('   ').map(morse => morse.split(' ').map(char => this.alphabetDecode[char]).join('')).join(' ');
    }
}


