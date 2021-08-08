export class CodigoChines2 {
	constructor() {
		this.alphabetEncode = {
			"a": "I", "b": "I―", "c": "I═",
			"d": "I≡", "e": "II", "f": "II―",
			"g": "II═", "h": "II≡", "i": "III",
			"j": "III―", "k": "III═", "l": "III≡",
			"m": "III≡―", "n": "III≡═", "o": "IIII",
			"p": "IIII―", "q": "IIII═", "r": "IIII≡",
			"s": "IIII≡―", "t": "IIII≡═", "u": "IIIII",
			"v": "IIIII―", "w": "IIIII═", "y": "IIIII≡",
			"z": "IIIII≡―"
		}
		this.alphabetDecode = {
			"I": "a", "I―": "b", "I═": "c",
			"I≡": "d", "II": "e", "II―": "f",
			"II═": "g", "II≡": "h", "III": "i",
			"III―": "j", "III═": "k", "III≡": "l",
			"III≡―": "m", "III≡═": "n", "IIII": "o",
			"IIII―": "p", "IIII═": "q", "IIII≡": "r",
			"IIII≡―": "s", "IIII≡═": "t", "IIIII": "u",
			"IIIII―": "v", "IIIII═": "w", "IIIII≡": "y",
			"IIIII≡―": "z"
		}


	}

	encrypt(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split('').map(char => char.split('').map(chines => this.alphabetEncode[chines]).join('')).join(' ');
    }

    decrypt(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('  ').map(morse => morse.split(' ').map(chines => this.alphabetDecode[chines]).join('')).join(' ');
    }
	
}