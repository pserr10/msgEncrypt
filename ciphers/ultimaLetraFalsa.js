export class UltimaLetraFalsa {
	constructor() {
		this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		this.RegExp = /\s/g; //RegExp = /\s/g; //expressão regular que encontra o espaço entre strings
		this.newWords = []
		this.getChar = () => {
			return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
		}
	}


	encrypt(str) {
		this.newWords = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
		this.newWords = this.newWords.split(this.RegExp);
		let result = [];

		for (let i = 0; i < this.newWords.length; i++) {
			result.push([this.newWords[i] + this.getChar()]);
		};

		return result.join(" ");

	}

	decrypt(str) {
		let result = [];
		this.newWords = str.split(this.RegExp);

		for (let i = 0; i < this.newWords.length; i++) {
			result.push(this.newWords[i].slice(0, -1));
		};
		return result.join(" ");
	}
}