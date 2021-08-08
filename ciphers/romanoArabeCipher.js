export class RomanoArabeCipher {
    constructor() {
        this.alphabetEncode = {
            "a": "I", "b": "1", "c": "2",
            "d": "3", "e": "II", "f": "4",
            "g": "5", "h": "6", "i": "III",
            "j": "7", "k": "8", "l": "9",
            "m": "10", "n": "11", "o": "IV",
            "p": "12", "q": "13", "r": "14",
            "s": "15", "t": "16", "u": "V",
            "v": "17", "w": "18", "x": "19",
            "y": "VI", "z": "20"
        }
        this.alphabetDecode = {
            "I": "a", "1": "b", "2": "c",
            "3": "d", "II": "e", "4": "f",
            "5": "g", "6": "h", "III": "i",
            "7": "j", "8": "k", "9": "l",
            "10": "m", "11": "n", "IV": "o",
            "12": "p", "13": "q", "14": "r",
            "15": "s", "16": "t", "V": "u",
            "17": "v", "18": "w", "VI": "y",
            "19": "x", "20": "z"
        }
    }

    encrypt(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split('').map(char => char.split('').map(romanoArabeChar => this.alphabetEncode[romanoArabeChar]).join('')).join(' ');
    }

    decrypt(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('   ').map(romanoArabeChar => romanoArabeChar.split(' ').map(char => this.alphabetDecode[char]).join('')).join(' ');
    }
}